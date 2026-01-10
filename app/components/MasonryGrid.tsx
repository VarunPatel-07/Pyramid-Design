/* eslint-disable react-hooks/purity */
"use client";

import { useMemo } from "react";

function MasonryGrid() {
  const items = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      height: Math.floor(Math?.random() * 200) + 150,
    }));
  }, []);
  return (
    <div className="sm:columns-2 gap-4 lg:px-4">
      {items.map((item) => (
        <div key={item.id} className="mb-4 break-inside-avoid" style={{ height: `${item.height}px` }}>
          <div className="w-full h-full bg-linear-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
        </div>
      ))}
    </div>
  );
}

export default MasonryGrid;
