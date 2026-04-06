import Image from "next/image";
import Link from "next/link";
import Footer from "./_components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen h-screen">
      <section className="h-full grid grid-cols-1 lg:grid-cols-2 gap-12 pt-52 relative drop-shadow-md drop-shadow-accent/25 pb-24">
        <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-bg-primary/80 to-bg-primary/90" />
        <Image
          src="/heroImg.png"
          alt="Name Named - Professional video editor with 5+ years of experience"
          fill
          className="object-cover object-top h-full w-full scale-x-[-1]"
        />
        <div className="z-10 relative space-y-8 px-4 lg:px-12 xl:px-24 col-span-2">
          <h1
            className="text-3xl md:text-7xl lg:text-8xl font-bold relative"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span
              aria-hidden="true"
              className="absolute top-0 text-transparent bg-accent-hover/25 bg-clip-text filter blur-sm opacity-60"
            >
              404
            </span>

            <span className="text-text-primary">404</span>

            <br />

            <span className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1 lg:top-5 text-transparent bg-linear-to-br from-accent/50 to-[#DD8AFF]/50 bg-clip-text filter blur-sm opacity-60"
              >
                PAGE NOT FOUND
              </span>

              <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
                PAGE NOT FOUND
              </span>
            </span>
          </h1>
          <p className="max-w-xl text-text-muted tracking-[1.05]">
            The page you&apos;re looking for was moved or does not exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <Link
              href="/"
              className="w-fit drop-shadow-xl drop-shadow-accent-hover/25 px-6 py-3 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded text-black font-semibold tracking-[1.05] text-lg"
            >
              RETURN TO HOME
            </Link>
            <Link
              href="/portfolio"
              className="w-fit px-6 py-3 bg-bg-secondary border border-border-secondary rounded text-text-primary font-semibold tracking-[1.05] text-lg"
            >
              VIEW SHOWREEL
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
