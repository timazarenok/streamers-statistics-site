import React from "react";
import { Form, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./login-page.css";

const LoginPage = ({ value, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.label>Имя:</Form.label>
    <Form.Control
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter your name"
    />
    <Link to={"/main/" + value}>
      <Button type="submit" value="Submit" />
    </Link>
  </Form>
);

export default LoginPage;
