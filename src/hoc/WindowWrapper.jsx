import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const windowState = windows[windowKey] ?? {};
    const {
      isOpen = false,
      isMinimized = false,
      isFullscreen = false,
      zIndex = 0,
    } = windowState;
    const ref = useRef(null);
    const dragRef = useRef(null);
    const normalTransformRef = useRef({ x: 0, y: 0, scaleX: 1, scaleY: 1 });
    const prevStateRef = useRef({
      isOpen: false,
      isMinimized: false,
      isFullscreen: false,
    });

    const getCurrentTransform = () => {
      const el = ref.current;
      if (!el) return { x: 0, y: 0, scaleX: 1, scaleY: 1 };

      return {
        x: Number(gsap.getProperty(el, "x")) || 0,
        y: Number(gsap.getProperty(el, "y")) || 0,
        scaleX: Number(gsap.getProperty(el, "scaleX")) || 1,
        scaleY: Number(gsap.getProperty(el, "scaleY")) || 1,
      };
    };

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      dragRef.current = instance;

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const dragInstance = dragRef.current;
      if (!dragInstance) return;

      if (isMinimized || isFullscreen) {
        dragInstance.disable();
        return;
      }

      dragInstance.enable();
    }, [isMinimized, isFullscreen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      const prev = prevStateRef.current;

      if (!isOpen) {
        gsap.killTweensOf(el);
        el.style.display = "none";
        prevStateRef.current = { isOpen, isMinimized, isFullscreen };
        return;
      }

      el.style.display = "block";
      el.style.pointerEvents = "auto";

      if (!prev.isOpen) {
        gsap.fromTo(
          el,
          { scale: 0.85, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
        );
      }

      if (isMinimized) {
        if (!prev.isMinimized) {
          if (!prev.isFullscreen) {
            normalTransformRef.current = getCurrentTransform();
          }

          const rect = el.getBoundingClientRect();
          const normal = normalTransformRef.current;
          const targetX = window.innerWidth / 2 - (rect.left + rect.width / 2);
          const targetY = window.innerHeight - (rect.top + rect.height / 2) - 16;

          gsap.to(el, {
            x: normal.x + targetX,
            y: normal.y + targetY,
            scaleX: 0.2,
            scaleY: 0.2,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
            onComplete: () => {
              if (prevStateRef.current.isMinimized) {
                el.style.display = "none";
              }
            },
          });
        }

        prevStateRef.current = { isOpen, isMinimized, isFullscreen };
        return;
      }

      if (prev.isMinimized) {
        const normal = normalTransformRef.current;
        if (isFullscreen) {
          gsap.set(el, {
            x: normal.x,
            y: normal.y,
            scaleX: normal.scaleX,
            scaleY: normal.scaleY,
            opacity: 1,
          });
        } else {
          gsap.to(el, {
            x: normal.x,
            y: normal.y,
            scaleX: normal.scaleX,
            scaleY: normal.scaleY,
            opacity: 1,
            duration: 0.35,
            ease: "power3.out",
          });
        }
      }

      if (isFullscreen) {
        if (!prev.isFullscreen) {
          normalTransformRef.current = getCurrentTransform();
        }

        const rect = el.getBoundingClientRect();
        const current = getCurrentTransform();

        gsap.to(el, {
          x: current.x - rect.left,
          y: current.y - rect.top,
          scaleX: window.innerWidth / rect.width,
          scaleY: window.innerHeight / rect.height,
          opacity: 1,
          duration: 0.45,
          ease: "power3.inOut",
          transformOrigin: "top left",
        });
      } else if (prev.isFullscreen) {
        const normal = normalTransformRef.current;

        gsap.to(el, {
          x: normal.x,
          y: normal.y,
          scaleX: normal.scaleX,
          scaleY: normal.scaleY,
          opacity: 1,
          duration: 0.45,
          ease: "power3.inOut",
          transformOrigin: "top left",
        });
      }

      prevStateRef.current = { isOpen, isMinimized, isFullscreen };
    }, [isOpen, isMinimized, isFullscreen]);

    return <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
      <Component {...props} />
    </section>;
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
  return Wrapped;
};

export default WindowWrapper;