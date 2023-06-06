import React from "react";
import SolutionsRow from "./SolutionsRow";

const CodeThread = ({ title, date, link }) => {
  // will need to make a get request to get all the solutions associated with the thread
  const solutions = [
    {
      id: 1,
      title: "Solution 1",
      url: "https://replit.com/@scawleyTechtoni/sortMethod",
      username: "Sarah",
      description: "",
    },
    {
      id: 2,
      title: "Solution 2",
      url: "https://replit.com/@YazminTorres1/Code-Challenge-2",
      username: "Yazmin",
      description: "This uses the filter method",
    },
  ];

  // will need to create a list of solutions

  const solutionsList = solutions.map((solution) => {
    return (
      <SolutionsRow
        key={solution.id}
        solutionId={solution.id}
        url={solution.url}
        username={solution.username}
        title={solution.title}
        description={solution.description}
      />
    );
  });

  const comments = [
    {
      id: 1,
      username: "Yazmin",
      description: "This is a really good challenge!",
    },
    {
      id: 2,
      username: "Pandora",
      description: "is this the type of challenge we can expect in interviews?",
    },
  ];

  // will need to make a get request to get all the general comments associated with the main thread
  // create a commentsList using comments component (Ruby)

  const commentsList = comments.map((comment) => (
    <p key={comment.id}>{comment.description}</p>
  ));

  return (
    <div
      className="thread-container"
      style={{ border: "2px solid black", padding: "2px", margin: "4px" }}
    >
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <a href={link}>Link to Code Challenge</a>
      {solutionsList}
      <div className="comments-section">
        <p>General Comments Section</p>
        {commentsList}
      </div>
      <button>Add Solution</button>
    </div>
  );
};

export default CodeThread;
