import React from "react";

const SolutionsRow = ({ url, username, solutionId, title, description }) => {
  const comments = [
    {
      id: 1,
      username: "Yazmin",
      description: "Why did you decided to use for instead of while loop?",
    },
    {
      id: 2,
      username: "Ruby",
      description:
        "Can you explain why we needed to use the spread operator here?",
    },
  ];

  // will need to make a get requests to get all the comments associated with a specific solution
  // create a commentsList using comments component (Ruby)

  const commentsList = comments.map((comment) => (
    <p key={comment.id}>{comment.description}</p>
  ));

  return (
    <div className="solution-row" style={{ backgroundColor: "lightgray" }}>
      <hr />
      <div className="header">
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <h2>
            <a href={url}>{title}</a>
          </h2>
          <p style={{ fontWeight: "bold" }}>{username}</p>
        </div>
        <p>{description}</p>
      </div>
      <div className="comments-section">
        <p>Comments:</p>
        {commentsList}
      </div>
      <hr />
    </div>
  );
};

export default SolutionsRow;
