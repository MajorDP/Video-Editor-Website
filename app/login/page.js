import Image from "next/image";
import Link from "next/link";
import LoginForm from "../_components/LoginForm";

export default function Page() {
  //TODO: add login functionality, restrict all /admin pages unless logged in
  const handleSubmit = async () => {
    "use server";
    console.log("aAAA");
  };

  return (
    <main className="px-4 min-h-screen flex items-center justify-center relative bg-bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/heroImg.png"
          alt="Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-bg-primary/80 to-bg-primary" />
      </div>

      <div className="z-10 w-full max-w-md mx-auto bg-bg-secondary/90 backdrop-blur-md rounded-xl p-4 lg:p-8 shadow-lg space-y-8">
        <h1
          className="text-4xl font-bold text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span
            aria-hidden="true"
            className="absolute text-transparent bg-accent-hover/25 bg-clip-text filter blur-sm opacity-50"
          >
            LOGIN
          </span>
          <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
            LOGIN
          </span>
        </h1>

        <p className="text-text-muted text-center">
          Access your account to manage your data.
        </p>

        <LoginForm onSubmit={handleSubmit} />
      </div>
    </main>
  );
}
