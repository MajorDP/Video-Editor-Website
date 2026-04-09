"use client";

import { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const [authData, setAuthData] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const error = await onSubmit(authData);

    setError(error);
    setIsLoading(false);

    if (!error) {
      window.location.href = "/admin";
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Username"
        className="px-4 py-2 rounded border border-border-secondary bg-bg-primary text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
        required
        value={authData.username}
        onChange={(e) => setAuthData({ ...authData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded border border-border-secondary bg-bg-primary text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
        required
        value={authData.password}
        onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
      />

      <button
        className="cursor-pointer px-6 py-2 bg-linear-to-br from-accent to-accent-hover hover:text-accent hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent rounded font-semibold text-black tracking-[1.05] text-lg transition duration-200"
        disabled={isLoading}
      >
        SIGN IN
      </button>
      {error && <p className="text-error text-center">{error}</p>}
    </form>
  );
}
