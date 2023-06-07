import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./comment.css";

const Comment = ({ category, id, refresh }) => {
  const [comment, setComment] = useState({
    username: "",
    content: "",
    id: id,
  });

  const clearForm = () => {
    setComment({
      username: "",
      content: "",
      id: id,
    });
  };

  const handleFormChange = (field, value) => {
    setComment((comment) => ({ ...comment, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = "";

    // set URL depending on category type
    if (category === "main") {
      url = "/api/code/comments";
    } else {
      url = "/api/solutions/comments";
    }

    // make post request to database
    await apiCall(url);

    // pass in the category type to re-render comments
    refresh(category);
  };

  //A function to handle the post request to comments table in db
  const apiCall = async (url) => {
    return fetch(`http://localhost:8080${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        clearForm();
      });
  };

  return (
    <Form className="comment-form" onSubmit={handleSubmit}>
      <h3>{category === "main" ? "Respond to Thread" : "Add comment"}</h3>
      <Form.Group>
        {/* <Form.Label>Enter name: </Form.Label> */}
        <input
          type="text"
          name="username"
          placeholder="Enter name"
          required
          value={comment.username || ""}
          onChange={(e) => handleFormChange("username", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <input
          type="text"
          name="comment"
          placeholder="Enter comment text"
          required
          value={comment.content || ""}
          onChange={(e) => handleFormChange("content", e.target.value)}
        />
      </Form.Group>
      <Button
        type="submit"
        className="btn-comment"
        style={{ marginBottom: "4px" }}
      >
        {category === "main" ? "Respond to Thread" : "Add Comment"}
      </Button>
    </Form>
  );
};

export default Comment;
