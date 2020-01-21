import React from "react";

export default function Dropdown({ items, onSelect }) {
  return (
    <div className="form-group">
      <select
        className="form-control bg-info text-light"
        onChange={event => onSelect(event.target.value)}
      >
        {items.map(item => {
          return (
            <option className="dropdown-content" key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
