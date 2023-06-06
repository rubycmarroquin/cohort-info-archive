import React, { useState, useEffect } from "react";
import Comment from "./Comment";

const ListComments = ({ category, id }) => {
  const [allComments, setAllComments] = useState(null);

  // make get request to get all comments associated with the id
  const loadComments = (url) => {
    fetch(`http://localhost:8080${url}`)
      .then((response) => response.json())
      .then((students) => {
        setAllComments(students);
      });
  };

  useEffect(() => {
    // checks to see if the category is main or a solution comments section
    if (category === "main") loadComments(`/api/code/comments/${id}`);
    else loadComments(`/api/solutions/comments/${id}`);
  }, [category]);

  return (
    allComments && (
      <div className="list-comments">
        <h4>Comments</h4>
        <ul>
          {allComments.map((comment) => {
            return (
              <li key={comment.sc_id}>
                <p>
                  {comment.username}: {comment.comment}
                </p>
              </li>
            );
          })}
        </ul>
        <Comment category={category} id={id} refresh={loadComments} />
      </div>
    )
  );
};

export default ListComments;
