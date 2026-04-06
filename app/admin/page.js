import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const options = [
    {
      href: "/admin/stats",
      label: "Edit Stats",
    },
    {
      href: "/admin/projects",
      label: "Edit Projects",
    },
    {
      href: "/admin/testimonials",
      label: "Edit Testimonials",
    },
    {
      href: "/admin/services",
      label: "Edit Services",
    },
    {
      href: "/admin/experience",
      label: "Edit Experience",
    },
    {
      href: "/admin/stack",
      label: "Edit Production Stack",
    },
    {
      href: "/admin/contactInfo",
      label: "Edit Contact Info",
    },
  ];

  return (
    <main className="min-h-screen space-y-4">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-52 relative drop-shadow-md drop-shadow-accent/25 pb-12">
        <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-bg-primary/80 to-bg-primary" />
        <Image
          src="/heroImg.png"
          alt="Name Named - Professional video editor with 5+ years of experience"
          fill
          className="object-cover h-full w-full opacity-60"
        />
        <div className="z-10 relative space-y-8 px-4 lg:px-12 xl:px-24 col-span-2">
          <h1
            className="text-3xl md:text-8xl font-bold relative"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span
              aria-hidden="true"
              className="absolute top-0 text-transparent bg-accent-hover/25 bg-clip-text filter blur-sm opacity-60"
            >
              WELCOME
            </span>

            <span className="text-text-primary">WELCOME</span>

            <br />

            <span className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1 lg:top-5 text-transparent bg-linear-to-br from-accent/50 to-[#DD8AFF]/50 bg-clip-text filter blur-sm opacity-60"
              >
                EMAIL@EMAIL.COM
              </span>

              <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
                EMAIL@EMAIL.COM
              </span>
            </span>
          </h1>
          <p className="max-w-xl text-text-muted tracking-[1.05]">
            Select the content you would like to edit.
          </p>
        </div>
      </section>
      <section className="px-4 lg:px-12 xl:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {options.map((option, index) => (
          <Link
            href={option.href}
            key={option.label}
            className={`group ${index % 2 === 0 && index === options.length - 1 ? "col-span-2" : "col-span-1"} flex relative h-48 p-4 lg:p-8 bg-bg-secondary rounded border-l border-accent/25 hover:border-accent-hover duration-200`}
          >
            <Image
              src="/heroImg.png"
              fill
              alt={option.label}
              className="object-cover opacity-40 group-hover:opacity-30"
            />
            <p className="z-10 relative mt-auto text-3xl font-semibold tracking-[1.05]">
              {option.label.toUpperCase()}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
