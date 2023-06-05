import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const MyForm = () => {
  // This is the original State with not initial blog
  const [codeChallenge, setCodeChallenge] = useState(
    editingBlog || {
      name: "",
      link: "",
      resource: "",
      date: "",
    }
  );

  //create functions that handle the event of the user typing into the form
  const handleNameChange = (event) => {
    const name = event.target.value;
    setCodeChallenge((codeChallenge) => ({ ...codeChallenge, name }));
  };

  const handleLinkChange = (event) => {
    const link = event.target.value;
    setCodeChallenge((codeChallenge) => ({ ...codeChallenge, link }));
  };

  const handleResourceChange = (event) => {
    const resource = event.target.value;
    setCodeChallenge((codeChallenge) => ({ ...codeChallenge, resource }));
  };
  const handleDateChange = (event) => {
    const date = event.target.value;
    setCodeChallenge((codeChallenge) => ({ ...codeChallenge, date }));
  };

  //   const handleCheckChange = (event) => {
  //     const is_current = event.target.checked;
  //     //console.log(iscurrent);
  //     setStudent((blog) => ({ ...blog, is_current }));
  //   };

  const clearForm = () => {
    setBlog({
      name: "",
      link: "",
      resource: "",
      date: "",
    });
  };

  //A function to handle the post request
  //   const postBlog = (newBlog) => {
  //     return fetch("http://localhost:9090/api/blogs", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(newBlog),
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         //console.log("From the post ", data);
  //         //I'm sending data to the List of Students (the parent) for updating the list
  //         onSaveBlog(data);
  //         //this line just for cleaning the form
  //         clearForm();
  //       });
  //   };

  //   //A function to handle the post request
  //   const putBlog = (toEditBlog) => {
  //     return fetch(`http://localhost:9090/api/blogs/${toEditBlog.blog_id}`, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(toEditBlog),
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         onUpdateBlog(data);
  //         //this line just for cleaning the form
  //         clearForm();
  //       });
  //   };

  //A function to handle the submit in both cases - Post and Put request!
  const handleSubmit = (e) => {
    e.preventDefault();
    if (blog.blog_id) {
      putBlog(blog);
    } else {
      postBlog(blog);
    }
  };

  return (
    <Form className="form-blogs" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <input
          type="text"
          id="add-title-name"
          placeholder="Name"
          required
          value={blog.title}
          onChange={handleNameChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Link</Form.Label>
        <input
          type="text"
          id="add-link"
          placeholder="Link"
          required
          value={blog.body_blog}
          onChange={handleLinkChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Resource</Form.Label>
        <input
          type="text"
          id="add-resource"
          placeholder="Resource"
          required
          value={blog.image}
          onChange={handleResourceChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <input
          type="text"
          id="add-date"
          placeholder="Date"
          required
          value={blog.date}
          onChange={handleDateChange}
        />
      </Form.Group>

      {/* <Form.Check
        type={"checkbox"}
        id={`isCurrent`}
        checked={blog.is_current}
        onChange={handleCheckChange}
        label={`Are they in the current program?`}
      /> */}
      <Form.Group>
        <Button type="submit" variant="outline-success">
          {blog.blog_id ? "Edit Blog" : "Add Blog"}
        </Button>
        {blog.blog_id ? (
          <Button type="button" variant="outline-warning" onClick={clearForm}>
            Cancel
          </Button>
        ) : null}
      </Form.Group>
    </Form>
  );
};

export default MyForm;
