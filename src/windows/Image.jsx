import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import useWindowStore from "#store/window.js";

const Image = () => {
  const data = useWindowStore((state) => state.windows.imgfile.data);

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{data.name}</h2>
      </div>

      {data.imageUrl ? (
        <div className="preview">
          <img src={data.imageUrl} alt={data.name} />
        </div>
      ) : null}
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;