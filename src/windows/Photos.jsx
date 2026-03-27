import { Mail } from "lucide-react";

import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls";
import { gallery } from "#constants";
import useWindowStore from "#store/window.js";

const Photos = () => {
  const { openWindow } = useWindowStore();

  const handleOpenImage = (item) => {
    openWindow("imgfile", {
      id: item.id,
      name: item.title || `Gallery image ${item.id}`,
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      imageUrl: item.img,
    });
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="flex items-center gap-3 text-gray-500">
          <Mail className="icon" />
        </div>
      </div>

      <div className="flex h-full w-full">
        <aside className="sidebar">
          <h2>Photos</h2>

          <ul>
            <li className="active">
              <img src="/icons/file.svg" alt="Library" />
              <p>Library</p>
            </li>
          </ul>
        </aside>

        <section className="gallery">
          <ul>
            {gallery.map((item) => (
              <li key={item.id} onClick={() => handleOpenImage(item)}>
                <img src={item.img} alt={item.alt || item.title || `Gallery image ${item.id}`} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;