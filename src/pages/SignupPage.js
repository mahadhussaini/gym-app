import React, { useState } from "react";
import { TextField, Button, Container, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email && password) {
      setError("");
      navigate("/login");
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom align="center">
        Sign Up
      </Typography>
      {error && (
        <Typography variant="body2" color="error" align="center" gutterBottom>
          {error}
        </Typography>
      )}
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="new-password"
        required
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSignup}
        style={{ marginTop: "1rem" }}
      >
        Sign Up
      </Button>
      <Typography variant="body2" align="center" style={{ marginTop: "1rem" }}>
        Already have an account?{" "}
        <Link href="/login" color="primary">
          Login
        </Link>
      </Typography>
    </Container>
  );
}

export default SignupPage;
