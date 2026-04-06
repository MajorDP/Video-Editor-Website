import Image from "next/image";
import Link from "next/link";
import { getAboutPageData } from "../_lib/services";
import Footer from "../_components/Footer";

export default async function Page() {
  const beliefs = [
    {
      icon: "John Johnas",
      title: "Belief 1",
      description:
        "Name Named provided great services Name Named provided great services Name Named provided great services Name Named provided great services",
    },
    {
      icon: "John Johnas2",
      title: "Belief 2",
      description:
        "Name Named provided great services Name Named provided great services Name Named provided great services Name Named provided great services",
    },
    {
      icon: "John Johnas3",
      title: "Belief 3",
      description:
        "Name Named provided great services Name Named provided great services Name Named provided great services Name Named provided great services",
    },
  ];

  const { error, data } = await getAboutPageData();

  const { experience, stack, contactInfo } = data;

  return (
    <>
      <main className="min-h-screen">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-52 relative drop-shadow-md drop-shadow-accent/25 pb-24">
          <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-bg-primary/80 to-bg-primary/90" />
          <Image
            src="/aboutImg.webp"
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
                I CRAFT
              </span>

              <span className="text-text-primary">I CRAFT</span>

              <br />

              <span className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1 lg:top-5 text-transparent bg-linear-to-br from-accent/50 to-[#DD8AFF]/50 bg-clip-text filter blur-sm opacity-60"
                >
                  VISUAL RHYTHM.
                </span>

                <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
                  VISUAL RHYTHM.
                </span>
              </span>
            </h1>
            <p className="max-w-xl text-text-muted tracking-[1.05]">
              Name Named - Video editor with 5+ years of experience. Crafting
              cinematic stories that drive results for creators and top-tier
              Name Named - Video editor with 5+ years of experience. Crafting
              cinematic stories that drive results for creators and top-tier
              brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link
                href="/contact"
                className="w-fit drop-shadow-xl drop-shadow-accent-hover/25 px-6 py-3 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded text-black font-semibold tracking-[1.05] text-lg"
              >
                REQUEST DEMO
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

        <section className="px-4 lg:px-12 xl:px-24 py-24">
          <h2
            className="text-3xl lg:text-5xl max-w-xl font-bold relative"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span
              aria-hidden="true"
              className="absolute top-0 text-transparent bg-[#DD8AFF]/25 bg-clip-text filter blur-sm opacity-100"
            >
              PREVIOUS EXPERIENCE
            </span>
            PREVIOUS EXPERIENCE
          </h2>
          <div className="h-1 bg-linear-to-br from-accent to-[#DD8AFF] w-24 rounded mt-4" />
          <p className="max-w-xl text-text-muted mt-4">
            Feedback from those who trusted my vision. Feedback from those who
            trusted my vision. Feedback from those who trusted my vision.
            Feedback from those who trusted my vision.
          </p>
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2">
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="space-y-4 group relative pl-12">
                  <div className="h-full w-0.5 bg-accent/25 absolute left-0 rounded drop-shadow-md drop-shadow-accent group-hover:bg-accent duration-200" />
                  <p className="font-semibold text-text-muted group-hover:text-accent duration-200">
                    {exp.date.toUpperCase()}
                  </p>
                  <h3 className="text-3xl font-bold tracking-[1.05]">
                    {exp.title.toUpperCase()}
                  </h3>
                  <p className="text-text-muted">{exp.description}</p>
                  <ul className="text-text-muted space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>- {achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="relative">
              <Image
                src="/aboutImg.webp"
                alt="Name Named - Professional video editor"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </section>

        <section className="bg-linear-to-br from-bg-primary to-bg-secondary py-8 border border-border-primary">
          <h2
            className="text-3xl lg:text-5xl max-w-xl text-center mx-auto font-bold relative"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span
              aria-hidden="true"
              className="absolute top-0 text-transparent bg-[#DD8AFF]/25 bg-clip-text filter blur-sm opacity-100"
            >
              My Production Stack
            </span>
            My Production Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto w-fit mt-20">
            {stack.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-row items-center justify-start gap-2 group"
              >
                <p className="rounded border border-border-secondary lg:border-border-primary text-text-muted group-hover:text-text-primary group-hover:border-border-secondary w-12 h-12 flex items-center justify-center p-4 duration-200">
                  {stat.icon}
                </p>
                <p className="text-text-muted group-hover:text-text-primary font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 lg:px-12 xl:px-24 py-24">
          <h2
            className="text-3xl lg:text-5xl max-w-xl font-bold relative "
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span
              aria-hidden="true"
              className="absolute top-0 text-transparent bg-[#DD8AFF]/25 bg-clip-text filter blur-sm opacity-100"
            >
              PHILOSOPHY
            </span>
            PHILOSOPHY
          </h2>
          <div className="h-1 bg-linear-to-br from-accent to-[#DD8AFF] w-24 rounded mt-4" />

          <p className="max-w-xl  text-text-muted mt-4">
            Feedback from those who trusted my vision.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
            {beliefs.map((belief, index) => (
              <div
                key={belief.title}
                className="relative space-y-8 mx-auto p-4 lg:p-8 rounded bg-bg-secondary group"
              >
                <div className="h-full top-0 w-0.5 bg-accent/25 absolute left-0 rounded-full drop-shadow-md drop-shadow-accent group-hover:bg-accent duration-200" />

                <p
                  className={`text-5xl ${index % 2 === 0 ? "text-accent" : "text-[#DD8AFF]"}`}
                >
                  ❜❜
                </p>

                <h3 className="font-bold text-3xl  tracking-[1.05]">
                  {belief.title}
                </h3>
                <p className="italic text-text-muted">
                  &quot;{belief.description}&quot;
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 lg:px-12 xl:px-24 py-24 space-y-12 bg-linear-to-br from-bg-primary to-bg-secondary border border-border-primary">
          <h2
            className="text-3xl lg:text-7xl max-w-xl mx-auto font-bold text-center relative"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            LET&apos;S DISCUSS
            <br />
            <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
              YOUR NEXT BIG PROJECT
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-center text-text-muted tracking-[1.05]">
            Name Named - Video editor with 5+ years of experience. Crafting
            cinematic stories that drive results for creators and top-tier
            brands.
          </p>
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            <Link
              href="/contact"
              className="drop-shadow-xl drop-shadow-accent-hover/25 px-6 py-3 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded text-black font-semibold tracking-[1.05] text-lg"
            >
              REQUEST DEMO
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center text-text-muted font-semibold tracking-[1.05]">
            <p>{contactInfo.email.toUpperCase()}</p>
            <p>{contactInfo.location.toUpperCase()}</p>
          </div>
        </section>
      </main>
      <Footer contactInfo={contactInfo} />
    </>
  );
}
