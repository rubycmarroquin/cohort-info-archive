import React from "react";

const SolutionsRow = ({ url, name }) => {
  return (
    <div className="solution-row">
      <a href={url}>Replit Link</a>
      <p>{name}</p>
    </div>
  );
};

export default SolutionsRow;
