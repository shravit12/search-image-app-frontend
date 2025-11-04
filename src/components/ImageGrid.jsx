import React, { useState } from "react";

const ImageGrid = ({ images = [] }) => {
  const [selected, setSelected] = useState({});

  const toggle = (id, img) => {
    setSelected(prev => {
      const copy = { ...prev };
      if (copy[id]) delete copy[id];
      else copy[id] = img;
      return copy;
    });
  };

  const selectedCount = Object.keys(selected).length;

  return (
    <div className="mt-6">
      <div className="mb-3 text-gray-600 font-medium">
        Selected: {selectedCount} images
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map(img => (
          <div key={img.id} className="relative group">
            <img
              src={img.urls.small}
              alt={img.alt_description}
              className="w-full h-48 object-cover rounded-lg shadow-sm group-hover:shadow-md transition"
            />

            <label
              className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={!!selected[img.id]}
                onChange={() => toggle(img.id, img)}
                className="cursor-pointer"
              />
              Select
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
