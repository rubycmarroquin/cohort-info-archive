import React, { useState } from "react";
import SolutionsRow from "./SolutionsRow";
import ListComments from "./ListComments";

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
    <div
      className="thread-container"
      style={{
        display: "flex",
        gap: "5px",
        flexDirection: "column",
        border: "2px solid black",
        padding: "2px",
        margin: "4px",
      }}
    >
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <a href={link}>Link to Code Challenge</a>
      <div>
        <h3>Solutions</h3>
        {solutions &&
          solutions.map((solution) => {
            return (
              <SolutionsRow
                solutionId={solution.solution_id}
                link={solution.link}
                username={solution.username}
                title={solution.title}
                description={solution.description}
              />
            );
          })}
      </div>

      <div
        style={{ backgroundColor: "lightblue" }}
        className="comments-section"
      >
        <ListComments category={"main"} id={id} />
      </div>
      <button>Add Solution</button>
    </div>
  );
};

export default CodeThread;
