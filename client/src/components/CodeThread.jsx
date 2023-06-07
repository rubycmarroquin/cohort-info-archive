import React, { useState, useEffect } from "react";
import "./codethread.css";
import SolutionsRow from "./SolutionsRow";
import ListComments from "./ListComments";
import SolutionModal from "./SolutionModal";

const CodeThread = ({ id, title, date, link }) => {
  const [solutions, setSolutions] = useState(null);

  // get request to get all the solutions associated with the thread
  const loadSolutions = () => {
    fetch(`http://localhost:8080/api/solutions/${id}`)
      .then((response) => response.json())
      .then((solutions) => {
        setSolutions(solutions);
      });
  };

  useEffect(() => loadSolutions(), [id]);

  return (
    <div className="thread-container">
      <div className="thread-header">
        <div className="content">
          <div className="header-title">
            <h2>{title}</h2>
            <p className="date-posted">{new Date(date).toDateString()}</p>
          </div>
          <div className="header-link">
            <a href={link}>Link to Code Challenge</a>
          </div>
        </div>
      </div>
      <div className="solutions-container">
        <h3>Solutions</h3>
        <div className="solutions">
          {solutions &&
            solutions.map((solution) => {
              return (
                <SolutionsRow
                  key={`solution+${solution.solution_id}`}
                  solutionId={solution.solution_id}
                  link={solution.link}
                  username={solution.username}
                  title={solution.title}
                  description={solution.description}
                />
              );
            })}
        </div>
      </div>

      <div className="comments-section">
        <ListComments category={"main"} id={id} />
      </div>
      <div className="solutions-seciton">
        <SolutionModal id={id} loadSolutions={loadSolutions} />
      </div>
    </div>
  );
};

export default CodeThread;
