import React, { useState } from "react";
import { useAuth } from "../Context/AuthContextProvider";
import { Button, Container, Spinner } from "react-bootstrap";
import { Form } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading } = useAuth();

  function login() {
    if (!email.trim() || !password.trim()) {
      alert("Заполните поля!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email);
  }

  return (
    <Container className="w-50">
      <Form.Control
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <Form.Control
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      {loading ? (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      ) : (
        <Button onClick={login}>Login</Button>
      )}
    </Container>
  );
};

export default Login;
