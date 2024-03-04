import React, { useState } from "react";
import styles from "./Login.module.css";
import { useAuth } from "../../context/AuthContext";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [password, setPassword] = useState("");
  const { setAdminMode } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Get error message from response
        throw new Error(errorText || "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setAdminMode(true);
      alert("Login successful!");
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <div className={styles.Login}>
      Sean secret login
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default Login;
