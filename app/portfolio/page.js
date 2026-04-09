import Image from "next/image";
import Link from "next/link";
import { getPortfolioPageData } from "../_lib/services";
import Projects from "../_components/Projects";
import Footer from "../_components/Footer";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://video-editor-website.vercel.app"
    : "http://localhost:3000";

export const metadata = {
  title: "Portfolio | Jeremiah Jackson - Professional Video Editor",
  description:
    "Explore Jeremiah Jackson's portfolio of high-performing video edits for YouTube, TikTok, and Instagram. See how cinematic storytelling, pacing, and engagement-focused edits drive retention and conversions.",
  keywords: [
    "Video Editing Portfolio",
    "Jeremiah Jackson",
    "YouTube Video Editing",
    "TikTok Video Editing",
    "Instagram Video Editing",
    "Social Media Video Editing",
    "High-Impact Editing",
    "Content Growth",
    "Brand Video Production",
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
    title: "Portfolio | Jeremiah Jackson - Professional Video Editor",
    description:
      "A curated selection of high-performing video edits designed to increase engagement, watch time, and conversions across YouTube, TikTok, and Instagram.",
    url: BASE_URL + "/portfolio",
    siteName: "Jeremiah Jackson Video Editing",
    images: [
      {
        url: BASE_URL + "/heroImg.png",
        width: 1200,
        height: 630,
        alt: "Jeremiah Jackson - Portfolio of High-Performing Video Edits",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Jeremiah Jackson - Professional Video Editor",
    description:
      "View high-impact video editing projects for YouTube, TikTok, and Instagram. See edits designed to boost retention, engagement, and conversions.",
    creator: "@JeremiahJackson",
    images: [
      {
        url: BASE_URL + "/heroImg.png",
        alt: "Jeremiah Jackson - Portfolio of High-Performing Video Edits",
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
    canonical: BASE_URL + "/portfolio",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default async function Page() {
  const { error, data } = await getPortfolioPageData();

  if (error || !data) {
    return (
      <p className="py-44 text-center">Failed to load Portfolio page data.</p>
    );
  }

  const { allEdits, contactInfo } = data;

  const categories = allEdits.reduce((catsAcc, edit) => {
    edit.cat.forEach((currCat) => {
      if (!catsAcc.some((categ) => categ.filter === currCat.filter)) {
        catsAcc.push(currCat);
      }
    });

    return catsAcc;
  }, []);

  return (
    <>
      <main className="min-h-screen space-y-4">
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
              className="text-4xl lg:text-7xl font-bold relative"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 text-transparent bg-accent-hover/25 bg-clip-text filter blur-sm opacity-60"
              >
                HIGH-PERFORMING
              </span>

              <span className="text-text-primary">HIGH-PERFORMING</span>

              <br />

              <span className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1 lg:top-5 text-transparent bg-linear-to-br from-accent/50 to-[#DD8AFF]/50 bg-clip-text filter blur-sm opacity-60"
                >
                  VIDEO EDITING PROJECTS
                </span>

                <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
                  VIDEO EDITING PROJECTS
                </span>
              </span>
            </h1>
            <p className="max-w-xl text-text-muted tracking-[1.05]">
              A collection of professional video editing work focused on
              increasing engagement, watch time, and conversions across YouTube,
              TikTok, and Instagram. Each project is edited with a focus on hook
              strength, pacing, and retention-so you&apos;re not just watching
              edits, you&apos;re seeing what drives performance.
            </p>
          </div>
        </section>

        <Projects allEdits={allEdits} categories={categories} />

        <section className="px-4 lg:px-12 xl:px-24 py-24 space-y-12 bg-linear-to-br from-bg-primary to-bg-secondary border border-border-primary">
          <h2
            className="text-3xl lg:text-7xl max-w-xl mx-auto font-bold text-center relative"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            YOUR VIDEOS COULD BE
            <br />
            <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
              DOING MORE
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
