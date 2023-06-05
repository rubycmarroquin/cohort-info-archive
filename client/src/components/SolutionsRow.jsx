import React from "react";

const SolutionsRow = ({ url, name }) => {
  // will need to make a get requests to get all the comments associated with a specific solution

  return (
    <div className="solution-row" style={{ backgroundColor: "lightgray" }}>
      <div className="header">
        <h2>
          <a href={url}>Replit Link</a>
        </h2>
        <p>{name}</p>
      </div>
      <div className="comments-section">
        <h6>Comments:</h6>
        <p>Comment 1</p>
      </div>
    </div>
  );
};

export default SolutionsRow;
