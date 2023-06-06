import React from "react";
import ListComments from "./ListComments";

const SolutionsRow = ({ link, username, solutionId, title, description }) => {
  return (
    <div className="solution-row" style={{ backgroundColor: "lightgray" }}>
      <div className="header">
        <h4 style={{ fontWeight: "bold" }}>{username}</h4>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <h4>
          <a href={link}>{title}</a>
        </h4>
      </div>
      <div className="comments-section">
        <ListComments category={"solution"} id={solutionId} />
      </div>
    </div>
  );
};

export default SolutionsRow;
