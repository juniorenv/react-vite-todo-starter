import LoginStyles from "./Login.module.css";

export function Login() {
  return (
    <div className={LoginStyles.PageContainer}>
      <div className={LoginStyles.PageContent}>
        <h1>Login</h1>

        <b>Email</b>
        <input />

        <b>Password</b>
        <input />

        <br />

        <button className={LoginStyles.Button}>Sign in</button>
      </div>
    </div>
  );
}
