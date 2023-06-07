import React from "react";
import ListComments from "./ListComments";
import "./solutionsrow.css";

const SolutionsRow = ({ link, username, solutionId, title, description }) => {
  return (
    <div className="solution-row">
      <div className="solution-content">
        <h3 className="solution-text">Solution</h3>
        <div className="solution-header">
          <div className="solution-title">
            <a href={link}>{title}</a>
            <h4>{username}</h4>
          </div>
          <p>Description: {description}</p>
        </div>
        <div className="comments-section">
          <ListComments category={"solution"} id={solutionId} />
        </div>
      </div>
    </div>
  );
};

export default SolutionsRow;
