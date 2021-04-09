import React from "react";
import { Form, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./login-page.css";

const LoginPage = ({ value, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Group>
        <h2>Имя</h2>
        <Form.Control
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </Form.Group>
      <Link to={"/main/" + value}>
        <Button type="submit" className="submit-btn">Submit</Button>
      </Link>
    </Form>
  );
};
export default LoginPage;
