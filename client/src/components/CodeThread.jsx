import React from "react";
import SolutionsRow from "./SolutionsRow";

const CodeThread = ({ title, date, link }) => {
  // will need to make a get request to get all the solutions associated with the thread
  const solutions = [
    {
      id: 1,
      link: "https://replit.com/@scawleyTechtoni/sortMethod",
      username: "Sarah",
    },
    {
      id: 2,
      link: "https://replit.com/@YazminTorres1/Code-Challenge-2",
      username: "Yazmin",
    },
  ];

  // will need to create a list of solutions

  const solutionsList = solutions.map((solution) => (
    <SolutionsRow
      key={solution.id}
      url={solution.url}
      name={solution.username}
    />
  ));

  return (
    <div
      className="thread-container"
      style={{ border: "2px solid black", padding: "2px", margin: "4px" }}
    >
      <h1>{title}</h1>
      <p>Date: {date}</p>
      <a href={link}>Link to Code Challenge</a>
      {solutionsList}
      <button>Add Solution</button>
    </div>
  );
};

export default CodeThread;
