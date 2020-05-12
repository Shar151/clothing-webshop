import React from "react";
import Section from "../../model/components/sections";
import "./menu-item.styles.scss";

// interface MeniItemProps {
//   section: Section;
// }

const MenuItem: React.FC<Section> = ({ imageUrl, size, title }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
