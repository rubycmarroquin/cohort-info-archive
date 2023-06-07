import React, { useState, useEffect } from "react";
import SolutionsRow from "./SolutionsRow";
import ListComments from "./ListComments";
import { Accordion, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CodeThread = ({ id, title, date, link }) => {
  const [solutions, setSolutions] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const loadSolutions = () => {
    fetch(`http://localhost:8080/api/solutions/${id}`)
      .then((response) => response.json())
      .then((solutions) => {
        setSolutions(solutions);
      });
  };

  useEffect(() => loadSolutions(), [id]);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

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
      <p>{new Date(date).toDateString()}</p>
      <a href={link}>Link to Code Challenge</a>

      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={() => handleClick(0)}
        >
          <Icon name="dropdown" />
          <h3>Solutions</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
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
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={() => handleClick(1)}
        >
          <Icon name="dropdown" />
          <h3>Comments</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <div
            style={{ backgroundColor: "lightblue" }}
            className="comments-section"
          >
            <ListComments category={"main"} id={id} />
          </div>
        </Accordion.Content>
      </Accordion>

      <button>Add Solution</button>
    </div>
  );
};

export default CodeThread;
