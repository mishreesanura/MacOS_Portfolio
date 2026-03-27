import { useMemo, useState } from "react";
import { Mail, Search } from "lucide-react";

import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window.js";

const Photos = () => {
  const { openWindow } = useWindowStore();
  const [activeCollection, setActiveCollection] = useState("library");
  const [searchQuery, setSearchQuery] = useState("");

  const links = useMemo(
    () => [
      {
        id: 0,
        type: "library",
        icon: "/icons/file.svg",
        title: "Library",
      },
      ...photosLinks,
    ],
    [],
  );

  const filteredGallery = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return gallery.filter((item) => {
      const inCollection = activeCollection === "library" || item.category === activeCollection;
      if (!inCollection) return false;
      if (!normalizedQuery) return true;

      const searchableText = `${item.title ?? ""} ${item.category ?? ""}`.toLowerCase();
      return searchableText.includes(normalizedQuery);
    });
  }, [activeCollection, searchQuery]);

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
          <Search className="icon" />
        </div>
      </div>

      <div className="flex h-full w-full">
        <aside className="sidebar">
          <h2>Photos</h2>

          <ul>
            {links.map(({ id, icon, title, type }) => (
              <li
                key={id}
                className={activeCollection === type ? "active" : ""}
                onClick={() => setActiveCollection(type)}
              >
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </aside>

        <section className="gallery">
          <div className="toolbar">
            <div className="search-box">
              <Search size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search photos"
                aria-label="Search photos"
              />
            </div>

            <p>{filteredGallery.length} photo{filteredGallery.length === 1 ? "" : "s"}</p>
          </div>

          <ul>
            {filteredGallery.map((item) => (
              <li key={item.id} onClick={() => handleOpenImage(item)}>
                <img src={item.img} alt={item.alt || item.title || `Gallery image ${item.id}`} />
              </li>
            ))}
          </ul>

          {filteredGallery.length === 0 ? (
            <div className="empty-state">
              <p>No photos found for this filter.</p>
            </div>
          ) : null}
        </section>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;