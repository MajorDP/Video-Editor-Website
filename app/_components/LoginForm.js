"use client";
export default function LoginForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded border border-border-secondary bg-bg-primary text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded border border-border-secondary bg-bg-primary text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
        required
      />

      <button className="cursor-pointer px-6 py-2 bg-linear-to-br from-accent to-accent-hover hover:text-accent hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent rounded font-semibold text-black tracking-[1.05] text-lg transition duration-200">
        SIGN IN
      </button>
    </form>
  );
}
