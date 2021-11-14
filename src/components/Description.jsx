import { useEffect, useState } from "react";
import items from "../data/menu.json";

export default function Description() {
  return (
    <div className="grid-container" style={{ marginTop: "1rem" }}>
      {items.map((house) => {
        return (
          <div>
            <span>{house.Description}</span>
          </div>
        );
      })}
    </div>
  );
}
