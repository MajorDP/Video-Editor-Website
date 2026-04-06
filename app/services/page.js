import Image from "next/image";
import Link from "next/link";
import { getServicesPageData } from "../_lib/services";
import Footer from "../_components/Footer";

export default async function Page() {
  const { error, data } = await getServicesPageData();

  const { services, contactInfo } = data;

  const howItWorks = [
    {
      icon: "01",
      title: "Concept & Planning",
      description:
        "We start by understanding your goals, audience, and vision to craft a concept that hits the mark.",
    },
    {
      icon: "02",
      title: "Editing & Motion Design",
      description:
        "We bring your content to life using cinematic editing, smooth transitions, and compelling motion graphics.",
    },
    {
      icon: "03",
      title: "Review & Delivery",
      description:
        "You review the draft, request revisions if needed, and receive the final high-quality video ready to publish.",
    },
  ];
  return (
    <>
      <main className="min-h-screen">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-52 relative drop-shadow-md drop-shadow-accent/25 pb-24">
          <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-bg-primary/80 to-bg-primary" />
          <Image
            src="/heroImg.png"
            alt="Name Named - Professional video editor with 5+ years of experience"
            fill
            className="object-cover h-full w-full opacity-60"
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
                PRECISION CRAFT
              </span>

              <span className="text-text-primary">PRECISION CRAFT</span>

              <br />

              <span className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1 lg:top-5 text-transparent bg-linear-to-br from-accent/50 to-[#DD8AFF]/50 bg-clip-text filter blur-sm opacity-60"
                >
                  FOR DIGITAL MOTION
                </span>

                <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
                  FOR DIGITAL MOTION
                </span>
              </span>
            </h1>
            <p className="max-w-xl text-text-muted tracking-[1.05]">
              Name Named - Video editor with 5+ years of experience. Crafting
              cinematic stories that drive results for creators and top-tier
              brands.
            </p>
          </div>
        </section>
        <section className="px-4 lg:px-12 xl:px-24 py-24 grid grid-cols-1 xl:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col gap-8 bg-bg-secondary p-4 lg:p-8 rounded"
            >
              <p
                className={`text-5xl ${index % 2 === 0 ? "text-accent" : "text-[#DD8AFF]"}`}
              >
                {service.icon}
              </p>
              <h3 className="font-bold text-3xl  tracking-[1.05]">
                {service.title.toUpperCase()}
              </h3>
              <p className="text-text-muted">{service.description}</p>
              <ul className="space-y-3 mt-auto">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex flex-col sm:flex-row items-center gap-2"
                  >
                    <div
                      className={`${index % 2 === 0 ? "bg-accent" : "bg-[#DD8AFF]"} w-2 h-2 rounded-full`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="px-4 lg:px-12 xl:px-24 py-24 space-y-24 bg-linear-to-br from-bg-primary to-bg-secondary border border-border-primary">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-4">
                <p
                  className={`text-sm uppercase tracking-widest ${
                    index % 2 === 0 ? "text-accent" : "text-[#DD8AFF]"
                  }`}
                >
                  What You Actually Get
                </p>

                <h2 className="text-3xl lg:text-5xl font-bold relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-0 text-transparent bg-[#DD8AFF]/25 bg-clip-text filter blur-sm opacity-100"
                  >
                    {service.title}
                  </span>
                  {service.title}
                </h2>
                <div className="h-1 bg-linear-to-br from-accent to-[#DD8AFF] w-24 rounded mt-4" />

                <p className="text-text-muted max-w-xl">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`mt-2 w-2 h-2 rounded-full ${
                          index % 2 === 0 ? "bg-accent" : "bg-[#DD8AFF]"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 bg-bg-primary p-6 lg:p-10 rounded">
                <h3 className="text-2xl font-semibold">Process</h3>

                <ol className="space-y-4 text-text-muted">
                  {service.process.map((step, i) => (
                    <li key={step}>
                      <span className="font-semibold text-text-primary">
                        {String(i + 1).padStart(2, "0")}.
                      </span>{" "}
                      {step}
                    </li>
                  ))}
                </ol>

                <div className="pt-6 border-t border-white/10 space-y-2">
                  <p className="text-sm text-text-muted">
                    Deliverables:{" "}
                    <span className="text-text-primary">
                      {service.deliverables.join(", ")}
                    </span>
                  </p>
                  <p className="text-sm text-text-muted">
                    Turnaround:{" "}
                    <span className="text-text-primary">
                      {service.turnaround}
                    </span>
                  </p>
                  <p className="text-sm text-text-muted">
                    Revisions:{" "}
                    <span className="text-text-primary">
                      {service.revisions}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="px-4 lg:px-12 xl:px-24 py-24 space-y-4 bg-linear-to-br from-bg-primary to-bg-secondary border border-border-primary">
          <h2
            className="text-3xl lg:text-5xl max-w-2xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span
              aria-hidden="true"
              className="absolute top-0 text-transparent bg-[#DD8AFF]/25 bg-clip-text filter blur-sm opacity-60"
            >
              HOW IT WORKS
            </span>
            HOW IT WORKS
          </h2>
          <div className="h-1 bg-linear-to-br from-accent to-[#DD8AFF] w-24 rounded" />

          <p className="max-w-xl text-text-muted tracking-[1.05] mt-4">
            From concept to final cut, here&apos;s exactly how we bring your
            vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 mt-4">
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
          <div className="grid grid-cols-1 gap-12 mt-20">
            {howItWorks.map((step, index) => (
              <div
                key={step.title}
                className="group flex flex-col h-84 lg:h-48 relative rounded border-l border-accent/25 hover:border-accent-hover duration-200"
              >
                <Image
                  src="/heroImg.png"
                  alt="Name Named - Professional Video Editor"
                  fill
                  className="object-cover rounded opacity-40 group-hover:opacity-20"
                />
                <div className="z-10 relative flex flex-col mt-auto tracking-[1.05] p-4 space-y-2 bg-linear-to-b from-transparent to-black/30">
                  <h3 className="text-3xl font-semibold mt-auto">
                    {step.title.toUpperCase()}
                  </h3>
                  <p className="">{step.description}</p>
                </div>
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
