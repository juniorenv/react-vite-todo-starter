import { useState, type FormEvent } from "react";
import { useAuthContext } from "../../shared/contexts/AuthContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuthContext();

  const inputClasses =
    "py-2 px-3 text-base border border-gray-300 rounded self-stretch focus:ring-2 focus:ring-green-500 focus:outline-none";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    try {
      login(email, password);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-4"
        >
          <h1 className="m-0 self-center text-2xl font-bold text-zinc-700">
            Login
          </h1>

          <label className="text-zinc-800" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            aria-invalid={!!error}
            aria-describedby={error ? "login-error" : undefined}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
          />

          <label className="text-zinc-800" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            aria-invalid={!!error}
            aria-describedby={error ? "login-error" : undefined}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClasses}
          />

          {error && (
            <div
              id="login-error"
              role="alert"
              className="self-stretch rounded-md bg-red-50 p-3 text-sm text-red-800"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            className="px-3 py-2 text-base border-none text-white cursor-pointer rounded self-stretch bg-green-500 hover:bg-green-600 active:bg-green-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
