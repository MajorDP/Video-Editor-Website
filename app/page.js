import Image from "next/image";
import Link from "next/link";
import { getHomePageData } from "./_lib/services";
import Footer from "./_components/Footer";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://video-editor-website.vercel.app"
    : "http://localhost:3000";

export const metadata = {
  title: "Jeremiah Jackson | Professional Video Editor",
  description:
    "Jeremiah Jackson is a freelance video editor with 5+ years of experience delivering high-impact edits for creators, brands, and businesses to increase engagement, retention, and conversions.",
  keywords: [
    "Video Editing",
    "Freelance Video Editor",
    "YouTube Video Editing",
    "TikTok Video Editing",
    "Instagram Video Editing",
    "Jeremiah Jackson",
    "Social Media Video Editing",
    "Content Growth",
    "Brand Video Production",
    "High-Impact Editing",
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
    title: "Jeremiah Jackson | Professional Video Editor",
    description:
      "Freelance video editor delivering high-performing edits for creators and brands to increase engagement and conversions.",
    url: BASE_URL,
    siteName: "Jeremiah Jackson Video Editing",
    images: [
      {
        url: BASE_URL + "/heroImg.png",
        alt: "Jeremiah Jackson - Professional Video Editor",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremiah Jackson | Professional Video Editor",
    description:
      "Freelance video editor creating high-impact content that boosts engagement, retention, and conversions for creators and brands.",
    creator: "@JeremiahJackson",
    images: [BASE_URL + "/heroImg.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};
export default async function Home() {
  const { error, data } = await getHomePageData();

  if (error || !data) {
    return <p className="py-44 text-center">Failed to load Home page data.</p>;
  }

  const { stats, featuredEdits, testimonials, contactInfo } = data;

  return (
    <>
      <main className="min-h-screen space-y-4">
        <section className="px-4 py-52 relative">
          <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-bg-primary/80 to-bg-primary" />
          <Image
            src="/heroImg.png"
            alt="Jeremiah Jackson - Professional video editor with 5+ years of experience"
            fill
            className="object-cover h-full w-full opacity-60"
          />
          <div className="z-10 relative space-y-12">
            <h1
              className="text-4xl md:text-7xl max-w-xl mx-auto font-bold text-center relative"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 text-transparent bg-accent-hover/25 bg-clip-text filter blur-sm opacity-60"
              >
                DELIVERING HIGH-IMPACT
              </span>

              <span className="text-text-primary">DELIVERING HIGH-IMPACT</span>

              <br />

              <span className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1 lg:top-5 text-transparent bg-linear-to-br from-accent/50 to-[#DD8AFF]/50 bg-clip-text filter blur-sm opacity-60"
                >
                  VIDEO EDITING
                </span>

                <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
                  VIDEO EDITING
                </span>
              </span>
            </h1>
            <p className="max-w-xl mx-auto text-center text-text-muted tracking-[1.05]">
              Jeremiah Jackson - Freelance video editor with 5+ years of
              experience providing professional video editing services for
              creators, brands, and businesses looking to increase engagement,
              retention, and conversions.
            </p>
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
              <Link
                href="/contact"
                className="drop-shadow-xl drop-shadow-accent-hover/25 px-6 py-3 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded text-black font-semibold tracking-[1.05] text-lg"
              >
                FREE SAMPLE EDIT
              </Link>
              <Link
                href="/portfolio"
                className=" px-6 py-3 bg-bg-secondary border border-border-secondary rounded text-text-primary font-semibold tracking-[1.05] text-lg"
              >
                WATCH MY WORK
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-4 gap-8 bg-linear-to-br from-bg-primary to-bg-secondary py-8 border border-border-primary">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col gap-2 mx-auto">
              <p
                className={`font-black ${index % 2 === 0 ? "text-accent" : "text-[#DD8AFF]"} text-center text-5xl`}
              >
                {stat.stat}
              </p>
              <p className="text-text-muted font-semibold">{stat.label}</p>
            </div>
          ))}
        </section>

        <section className="px-4 lg:px-12 xl:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col  relative">
            <h2
              className="text-3xl lg:text-5xl max-w-2xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 text-transparent bg-[#DD8AFF]/25 bg-clip-text filter blur-sm opacity-60"
              >
                WHO I EDIT VIDEOS FOR
              </span>
              WHO I EDIT VIDEOS FOR
            </h2>
            <div className="h-1 bg-linear-to-br from-accent to-[#DD8AFF] w-24 rounded mt-4" />

            <p className="max-w-xl text-text-muted mt-4">
              I work with creators and brands who understand that video is more
              than content- it&apos;s a growth tool. Every edit is built to
              increase watch time, retention, and conversions.
            </p>

            <div className="bg-bg-secondary border border-border-primary rounded p-4 space-y-4 mt-4">
              <p className="font-bold text-lg text-[#DD8AFF]">NOT FOR:</p>
              <ul className="text-text-muted max-w-xl space-y-3">
                <li>
                  {" "}
                  <span className="text-[#DD8AFF]">✖ </span>Cheap, one-off edits
                  with no long-term vision
                </li>
                <li>
                  <span className="text-[#DD8AFF]">✖</span> Clients without a
                  clear content strategy
                </li>
                <li>
                  <span className="text-[#DD8AFF]">✖</span> People chasing
                  “viral” instead of sustainable growth
                </li>
              </ul>
            </div>

            <div className="bg-bg-secondary border border-border-primary rounded p-4 space-y-4 mt-4">
              <p className="font-bold text-lg text-accent">BEST FOR:</p>
              <ul className="text-text-muted max-w-xl space-y-3">
                <li>
                  <span className="text-accent">✔</span> Creators serious about
                  growing on YouTube, TikTok, or Instagram
                </li>
                <li>
                  <span className="text-accent">✔</span> Brands investing in
                  consistent, high-quality video content
                </li>
                <li>
                  <span className="text-accent">✔</span> Businesses that want
                  videos that convert viewers into customers
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 mt-4">
              <Link
                href="/contact"
                className="w-fit drop-shadow-xl drop-shadow-accent-hover/25 px-6 py-3 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded text-black font-semibold tracking-[1.05] text-lg"
              >
                FREE SAMPLE EDIT
              </Link>
              <Link
                href="/portfolio"
                className="w-fit px-6 py-3 bg-bg-secondary border border-border-secondary rounded text-text-primary font-semibold tracking-[1.05] text-lg"
              >
                SEE WORK
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-120 lg:h-full">
            <div className="relative lg:col-span-2">
              <Image
                src="/heroImg.png"
                alt="Jeremiah Jackson - Professional Video Editor"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/heroImg.png"
                alt="Jeremiah Jackson - Professional video editor creating high-quality content for brands and creators"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/heroImg.png"
                alt="Professional video editor creating high-quality content for brands and creators"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </section>

        <section className="px-4 lg:px-12 xl:px-24 py-24 bg-linear-to-br from-bg-primary to-bg-secondary border border-border-primary">
          <h2
            className="text-3xl lg:text-5xl max-w-2xl font-bold relative"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span
              aria-hidden="true"
              className="absolute top-0 text-transparent bg-[#DD8AFF]/25 bg-clip-text filter blur-sm opacity-100"
            >
              VIDEO EDITING PORTFOLIO & CLIENT WORK
            </span>
            VIDEO EDITING PORTFOLIO & CLIENT WORK
          </h2>
          <div className="h-1 bg-linear-to-br from-accent to-[#DD8AFF] w-24 rounded mt-4" />

          <p className="max-w-xl text-text-muted tracking-[1.05] mt-4">
            A selection of high-performing video edits designed to increase
            engagement, boost retention, and elevate brand presence across
            social media and digital platforms.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-20">
            {featuredEdits.map((edit, index) => (
              <Link
                href={`/portfolio/${edit.id}`}
                key={edit.title}
                className={`${index % 2 === 0 ? "xl:col-span-2" : ""} relative h-96 rounded group cursor-pointer`}
              >
                <div className="absolute inset-0 w-full h-full bg-bg-primary z-1 opacity-0 group-hover:opacity-30 duration-200" />

                <Image
                  src={edit.img}
                  alt={edit.title}
                  fill
                  className="object-cover rounded"
                />
                <div className="z-20 relative flex flex-col justify-end gap-2 h-full px-4 py-2 tracking-[1.05] overflow-hidden">
                  <p
                    className={`${index % 2 === 1 ? "text-[#DD8AFF]" : "text-accent"} text-sm font-semibold`}
                  >
                    {edit.type.toUpperCase()}
                  </p>
                  <h3 className="font-bold text-3xl">
                    {edit.title.toUpperCase()}
                  </h3>
                  <div className="h-0 group-hover:h-full max-h-fit transition-all duration-200">
                    <p className="text-text-muted opacity-0 group-hover:opacity-100 transition-all duration-200">
                      {edit.description}
                    </p>
                  </div>
                </div>
              </Link>
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
              RESULTS FROM CLIENTS I&apos;VE WORKED WITH
            </span>
            RESULTS FROM CLIENTS I&apos;VE WORKED WITH
          </h2>
          <div className="h-1 bg-linear-to-br from-accent to-[#DD8AFF] w-24 rounded mt-4" />

          <p className="max-w-xl  text-text-muted mt-4">
            Feedback from creators and brands who&apos;ve used my video editing
            services to grow their audience and improve content performance.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="space-y-8 w-full mx-auto p-4 lg:p-8 rounded bg-bg-secondary"
              >
                <p
                  className={`text-5xl ${index % 2 === 0 ? "text-accent" : "text-[#DD8AFF]"}`}
                >
                  ❜❜
                </p>
                <p className="italic text-text-muted">
                  &quot;{testimonial.description}&quot;
                </p>
                <div className="flex flex-row gap-2">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.title}
                    width={52}
                    height={52}
                    className="rounded"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-bold">
                      {testimonial.name.toUpperCase()}
                    </p>
                    <p className="text-text-muted">
                      {testimonial.title.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 lg:px-12 xl:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-linear-to-br from-bg-primary to-bg-secondary border border-border-primary mb-0">
          <div className="flex flex-col  relative">
            <h2
              className="text-3xl lg:text-5xl max-w-2xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 text-transparent bg-[#DD8AFF]/25 bg-clip-text filter blur-sm opacity-60"
              >
                RESULT-FOCUSED VIDEO EDITING SINCE 2021
              </span>
              RESULT-FOCUSED VIDEO EDITING SINCE 2021
            </h2>
            <div className="h-1 bg-linear-to-br from-accent to-[#DD8AFF] w-24 rounded mt-4" />

            <p className="max-w-xl text-text-muted mt-4">
              Since 2021, I&apos;ve helped creators and brands transform raw
              footage into high-performing content. My editing approach combines
              storytelling, pacing, and platform-specific strategies to maximize
              engagement and conversions.
            </p>
            <ul className="text-text-muted max-w-xl mt-4 space-y-3">
              <li>
                <span className="text-accent">✔</span> Strategic editing for
                YouTube, TikTok, and Instagram
              </li>
              <li>
                <span className="text-accent">✔</span> Focus on audience
                retention and watch time
              </li>
              <li>
                <span className="text-accent">✔</span> Fast turnaround and
                consistent delivery
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-8 mt-12 lg:mt-auto">
              <Link
                href="/contact"
                className="w-fit drop-shadow-xl drop-shadow-accent-hover/25 px-6 py-3 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded text-black font-semibold tracking-[1.05] text-lg"
              >
                FREE SAMPLE EDIT
              </Link>
              <Link
                href="/portfolio"
                className="w-fit px-6 py-3 bg-bg-secondary border border-border-secondary rounded text-text-primary font-semibold tracking-[1.05] text-lg"
              >
                VIEW SHOWREEL
              </Link>
            </div>
          </div>
          <div className="relative h-120">
            <Image
              src="/heroImg.png"
              alt="Name Named - Professional Video Editor"
              fill
              className="object-cover rounded"
            />
          </div>
        </section>

        <section className="px-4 lg:px-12 xl:px-24 py-24 space-y-12 bg-linear-to-br from-bg-primary to-bg-secondary border border-border-primary">
          <h2
            className="text-3xl lg:text-7xl max-w-xl mx-auto font-bold text-center relative"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            STOP LOSING VIEWS,
            <br />
            <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
              START GROWING WITH BETTER EDITING
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
              className="drop-shadow-md drop-shadow-accent-hover/25 px-6 py-3 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded text-black font-semibold tracking-[1.05] text-lg"
            >
              GET A FREE SAMPLE EDIT
            </Link>
            <Link
              href="/portfolio"
              className=" px-6 py-3 bg-bg-secondary border border-border-secondary rounded text-text-primary font-semibold tracking-[1.05] text-lg"
            >
              WATCH MY WORK
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
