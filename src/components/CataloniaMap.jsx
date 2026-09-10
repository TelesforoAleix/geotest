import React, { useEffect, useRef } from "react";
import Map from "../data/map";
import { comarcaPaths } from "../data/comarcaMap";

const provincePaths = ["g5869", "path4297", "path4283", "path5847", "path5845"];

function CataloniaMap({ onSelect, selectedComarca, correctComarca, disabled }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      return undefined;
    }

    provincePaths.forEach((id) => {
      const path = mapRef.current.querySelector(`#${id}`);
      if (path) {
        path.setAttribute("display", "none");
      }
    });

    const removeListeners = Object.entries(comarcaPaths).map(([id, comarca]) => {
      const path = mapRef.current.querySelector(`#${id}`);
      if (!path) {
        return () => {};
      }

      const isCorrect = correctComarca === comarca;
      const isSelected = selectedComarca === comarca;
      path.style.fill = isCorrect ? "#68a357" : isSelected ? "#d95d55" : "#fafafa";
      path.style.cursor = disabled ? "default" : "pointer";

      const selectComarca = () => {
        if (!disabled) {
          onSelect(comarca);
        }
      };

      path.addEventListener("click", selectComarca);
      return () => path.removeEventListener("click", selectComarca);
    });

    return () => removeListeners.forEach((removeListener) => removeListener());
  }, [correctComarca, disabled, onSelect, selectedComarca]);

  return <Map containerRef={mapRef} />;
}

export default CataloniaMap;
