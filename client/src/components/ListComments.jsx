import React, { useState, useEffect } from "react";
import Comment from "./Comment";

const ListComments = ({ category, id }) => {
  const [allComments, setAllComments] = useState(null);

  // make get request to get all comments associated with the id
  const loadComments = (type) => {
    // set url according to comments section type
    let url =
      type === "main"
        ? `/api/code/comments/${id}`
        : `/api/solutions/comments/${id}`;

    fetch(`http://localhost:8080${url}`)
      .then((response) => response.json())
      .then((comments) => {
        setAllComments(comments);
      });
  };

  useEffect(() => {
    // wait for category to render, then call loadComments()
    if (category) loadComments(category);
  }, [category]);

  return (
    allComments && (
      <div className="list-comments">
        <h5>{category === "main" ? "Responses" : "Comments"}</h5>
        {allComments.map((comment, index) => {
          return (
            <p key={`${comment.username}+${index}`}>
              <strong>{comment.username}</strong>: {comment.comment}
            </p>
          );
        })}

        <Comment category={category} id={id} refresh={loadComments} />
      </div>
    )
  );
};

export default ListComments;
