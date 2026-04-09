import Image from "next/image";
import Link from "next/link";
import { getServicesPageData } from "../_lib/services";
import Footer from "../_components/Footer";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://video-editor-website.vercel.app"
    : "http://localhost:3000";

export const metadata = {
  title: "Services | Jeremiah Jackson - Professional Video Editor",
  description:
    "Discover Jeremiah Jackson's professional video editing services for creators and brands. Elevate your content with cinematic edits, storytelling, and engagement-driven video strategies for YouTube, TikTok, and Instagram.",
  keywords: [
    "Video Editing Services",
    "Jeremiah Jackson",
    "YouTube Video Editing",
    "TikTok Video Editing",
    "Instagram Video Editing",
    "Social Media Video Editing",
    "Brand Video Production",
    "High-Impact Editing",
    "Content Growth",
    "Professional Video Editor",
  ],
  authors: [
    {
      name: "Jeremiah Jackson",
      url: BASE_URL,
    },
  ],
  creator: "Jeremiah Jackson",
  publisher: "Jeremiah Jackson",
  openGraph: {
    title: "Services | Jeremiah Jackson - Professional Video Editor",
    description:
      "Explore tailored video editing services designed to elevate content, increase engagement, and drive conversions across YouTube, TikTok, and Instagram.",
    url: BASE_URL + "/services",
    siteName: "Jeremiah Jackson Video Editing",
    images: [
      {
        url: BASE_URL + "/heroImg.png",
        width: 1200,
        height: 630,
        alt: "Jeremiah Jackson - Professional Video Editing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Jeremiah Jackson - Professional Video Editor",
    description:
      "Professional video editing services for creators and brands, focused on engagement, retention, and high-performing content for YouTube, TikTok, and Instagram.",
    creator: "@JeremiahJackson",
    images: [
      {
        url: BASE_URL + "/heroImg.png",
        alt: "Jeremiah Jackson - Professional Video Editing Services",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: BASE_URL + "/services",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default async function Page() {
  const { error, data } = await getServicesPageData();

  if (error || !data) {
    return (
      <p className="py-44 text-center">Failed to load Services page data.</p>
    );
  }

  const { services, contactInfo } = data;

  const howItWorks = [
    {
      icon: "01",
      title: "Strategy & Planning",
      description:
        "We define your goals, audience, and content strategy to ensure every edit is built for performance, not just aesthetics.",
    },
    {
      icon: "02",
      title: "Editing & Motion Design",
      description:
        "Your footage is transformed using retention-focused editing, pacing, and motion design tailored to your platform.",
    },
    {
      icon: "03",
      title: "Review & Delivery",
      description:
        "You review the edit, request revisions if needed, and receive a final version optimized for publishing and performance.",
    },
  ];
  return (
    <>
      <main className="min-h-screen">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-52 relative drop-shadow-md drop-shadow-accent/25 pb-24">
          <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-bg-primary/80 to-bg-primary" />
          <Image
            src="/heroImg.png"
            alt="Jeremiah Jackson - Professional video editor with 5+ years of experience"
            fill
            className="object-cover h-full w-full opacity-60"
          />
          <div className="z-10 relative space-y-8 px-4 lg:px-12 xl:px-24 col-span-2">
            <h1
              className="text-4xl lg:text-7xl font-bold relative"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 text-transparent bg-accent-hover/25 bg-clip-text filter blur-sm opacity-60"
              >
                VIDEO EDITING SERVICES
              </span>

              <span className="text-text-primary">VIDEO EDITING SERVICES </span>

              <br />

              <span className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1 lg:top-5 text-transparent bg-linear-to-br from-accent/50 to-[#DD8AFF]/50 bg-clip-text filter blur-sm opacity-60"
                >
                  FOR CREATORS & BRANDS
                </span>

                <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
                  FOR CREATORS & BRANDS
                </span>
              </span>
            </h1>
            <p className="max-w-xl text-text-muted tracking-[1.05]">
              Explore tailored video editing services designed to elevate your
              content, capture attention, and drive real engagement across every
              platform.
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
                  What You Get With This Service
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
                <h3 className="text-2xl font-semibold">
                  How This Service Works
                </h3>

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
                  alt="Jeremiah Jackson - Professional video editor"
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
            If you&apos;re serious about growing your brand or content,
            let&apos;s create videos that actually perform. Get a free sample
            edit and see the difference.
          </p>
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            <Link
              href="/contact"
              className="drop-shadow-xl drop-shadow-accent-hover/25 px-6 py-3 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded text-black font-semibold tracking-[1.05] text-lg"
            >
              GET A FREE SAMPLE EDIT
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
