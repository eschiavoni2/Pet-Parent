import React from "react";
// import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-group">
      <ul>{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <>{children}</>;
}
