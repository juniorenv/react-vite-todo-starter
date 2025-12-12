import { useState } from "react";
import LoginStyles from "./Login.module.css";
import { useAuthContext } from "../../shared/contexts/AuthContext";

export function Login() {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");

  const { login } = useAuthContext();

  const handleLogin = () => {
    if (!emailValue.trim() || !passwordValue.trim()) {
      alert("Please fill in all fields");
      return;
    }
    login(emailValue, passwordValue);
  };

  return (
    <div className={LoginStyles.PageContainer}>
      <div className={LoginStyles.PageContent}>
        <h1>Login</h1>

        <b>Email</b>
        <input value={emailValue} onChange={(e) => setEmail(e.target.value)} />

        <b>Password</b>
        <input
          value={passwordValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleLogin();
          }}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <br />

        <button onClick={handleLogin} className={LoginStyles.Button}>
          Sign in
        </button>
      </div>
    </div>
  );
}
