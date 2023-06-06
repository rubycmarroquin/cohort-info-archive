import React from "react";
import ListComments from "./ListComments";

const SolutionsRow = ({ link, username, solutionId, title, description }) => {
  return (
    <div className="solution-row" style={{ backgroundColor: "lightgray" }}>
      <div className="header">
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <h3>
            <a href={link}>{title}</a>
          </h3>
          <p style={{ fontWeight: "bold" }}>{username}</p>
        </div>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
      <div className="comments-section">
        <ListComments category={"solution"} id={solutionId} />
      </div>
    </div>
  );
};

export default SolutionsRow;
