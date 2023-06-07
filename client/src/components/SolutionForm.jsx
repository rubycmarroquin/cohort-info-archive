import React, { useState } from "react";

const SolutionForm = ({ handleClose, loadSolutions, id }) => {
  const [username, setUsername] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/solutions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, username, link, description, title }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        loadSolutions();
        handleClose();
        // Handle success or display a success message
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.error(error);
      // Handle error or display an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Link:
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SolutionForm;
