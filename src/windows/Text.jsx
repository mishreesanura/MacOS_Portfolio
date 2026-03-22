import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import useWindowStore from "#store/window.js";

const Text = () => {
  const data = useWindowStore((state) => state.windows.txtfile.data);

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="p-5 space-y-4 text-sm text-gray-700">
        {data.image ? (
          <img
            src={data.image}
            alt={data.name}
            className="w-full max-h-56 object-cover rounded-md"
          />
        ) : null}

        {data.subtitle ? <h3 className="font-semibold text-base">{data.subtitle}</h3> : null}

        {Array.isArray(data.description)
          ? data.description.map((paragraph, index) => (
              <p key={`${data.name}-${index}`}>{paragraph}</p>
            ))
          : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
