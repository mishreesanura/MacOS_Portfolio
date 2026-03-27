import useWindowStore from "#store/window.js";

const WindowControls = ({ target }) => {
  const { closeWindow, minimizeWindow, toggleFullscreen } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" onClick={() => minimizeWindow(target)} />
      <div className="maximize" onClick={() => toggleFullscreen(target)} />
    </div>
  );
};

export default WindowControls;