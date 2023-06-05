import React from "react";

const SolutionsRow = ({ url, name, solutionId }) => {
  const comments = [
    {
      id: 1,
      username: "Yazmin",
      description: "why did you decided to use for instead of while loop?",
    },
    {
      id: 2,
      username: "Ruby",
      description:
        "can you explain why we needed to use the spread operator here?",
    },
  ];

  // will need to make a get requests to get all the comments associated with a specific solution
  // create a commentsList using comments component (Ruby)

  const commentsList = comments.map((comment) => (
    <p key={comment.id}>{comment.description}</p>
  ));

  return (
    <div className="solution-row" style={{ backgroundColor: "lightgray" }}>
      <div className="header">
        <h2>
          <a href={url}>Replit Link</a>
        </h2>
        <p>{name}</p>
      </div>
      <div className="comments-section">
        <p>Comments:</p>
        {commentsList}
      </div>
    </div>
  );
};

export default SolutionsRow;
