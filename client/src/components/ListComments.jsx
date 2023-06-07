import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { Accordion, Icon } from "semantic-ui-react";

const ListComments = ({ category, id }) => {
  const [allComments, setAllComments] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

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

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    allComments && (
      <div className="list-comments">
        <h5>{category === "main" ? "Responses" : "Comments"}</h5>
        <Accordion styled>
          {allComments.map((comment, index) => (
            <React.Fragment key={`${comment.username}+${index}`}>
              <Accordion.Title
                active={activeIndex === index}
                index={index}
                onClick={() => handleClick(index)}
              >
                <Icon name="dropdown" />
                <strong>{comment.username}</strong>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === index}>
                <p>{comment.comment}</p>
              </Accordion.Content>
            </React.Fragment>
          ))}
        </Accordion>
        <Comment category={category} id={id} refresh={loadComments} />
      </div>
    )
  );
};

export default ListComments;
