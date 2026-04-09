import { getProjectData } from "@/app/_lib/services";
import Footer from "../../_components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://video-editor-website.vercel.app"
    : "http://localhost:3000";

export async function generateMetadata({ params }) {
  const { project } = await params;

  const { error, data } = await getProjectData(project);

  if (error || !data?.projectData) {
    return {
      title: "Project Not Found | Jeremiah Jackson",
      description: "This project does not exist or could not be found.",
      openGraph: {
        title: "Project Not Found | Jeremiah Jackson",
        description: "This project does not exist or could not be found.",
        url: `${BASE_URL}/portfolio/${project}`,
        images: [
          {
            url: `${BASE_URL}/heroImg.png`,
            alt: "Project Not Found",
            width: 1200,
            height: 630,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Project Not Found | Jeremiah Jackson",
        description: "This project does not exist or could not be found.",
        images: [`${BASE_URL}/heroImg.png`],
      },
      robots: { index: false, follow: false },
    };
  }

  const projectData = data.projectData;

  const canonicalUrl = `${BASE_URL}/portfolio/${project}`;

  const projectTitle = projectData.title || "Project";
  const projectDescription =
    projectData.description ||
    "High-quality video editing project by Jeremiah Jackson.";

  return {
    title: `${projectTitle} | Jeremiah Jackson`,
    description: projectDescription,
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
    authors: [{ name: "Jeremiah Jackson", url: BASE_URL }],
    creator: "Jeremiah Jackson",
    publisher: "Jeremiah Jackson",
    openGraph: {
      title: `${projectTitle} | Jeremiah Jackson`,
      description: projectDescription,
      url: `${BASE_URL}/portfolio/${project}`,
      siteName: "Jeremiah Jackson Video Editing",
      images: [
        {
          url: `${BASE_URL}${projectData.img}`,
          alt: projectTitle,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectTitle} | Jeremiah Jackson`,
      description: projectDescription,
      creator: "@JeremiahJackson",
      images: [`${BASE_URL}${projectData.img}`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function ProjectPage({ params }) {
  const { project } = await params;

  const { error, data } = await getProjectData(project);

  console.log("data: ", data);
  if (error || !data) {
    return <p className="py-44 text-center">Project not found.</p>;
  }

  if (!data.projectData) {
    notFound();
  }

  const { projectData, contactInfo } = data;
  return (
    <>
      <main className="min-h-screen space-y-4">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-52 relative drop-shadow-md drop-shadow-accent/25 pb-24">
          <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-bg-primary/80 to-bg-primary/90" />
          <Image
            src={projectData.img}
            alt="Name Named - Professional video editor with 5+ years of experience"
            fill
            className="object-cover h-full w-full opacity-60"
          />
          <div className="z-10 relative space-y-8 px-4 lg:px-12 xl:px-24 col-span-2">
            <h1
              className="text-3xl lg:text-7xl font-bold relative"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 text-transparent bg-accent-hover/25 bg-clip-text filter blur-sm opacity-60"
              >
                PROJECT:
              </span>

              <span className="text-text-primary">PROJECT:</span>

              <br />

              <span className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1 lg:top-5 text-transparent bg-linear-to-br from-accent/50 to-[#DD8AFF]/50 bg-clip-text filter blur-sm opacity-60"
                >
                  {projectData.title.toUpperCase()}
                </span>

                <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
                  {projectData.title.toUpperCase()}
                </span>
              </span>
            </h1>
            <p className="max-w-xl text-text-muted tracking-[1.05]">
              Explore {projectData.title} and what makes it unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link
                href="/contact"
                className="w-fit drop-shadow-xl drop-shadow-accent-hover/25 px-6 py-3 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded text-black font-semibold tracking-[1.05] text-lg"
              >
                REQUEST SIMILAR EDIT
              </Link>
              <Link
                href="/portfolio"
                className="w-fit px-6 py-3 bg-bg-secondary border border-border-secondary rounded text-text-primary font-semibold tracking-[1.05] text-lg"
              >
                MORE PROJECTS
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 lg:px-12 xl:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-120">
            <Image
              src={projectData.img}
              alt={projectData.title}
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <h2
              className="text-3xl lg:text-5xl max-w-2xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              PROJECT DETAILS
            </h2>
            <div className="h-1 bg-linear-to-br from-accent to-[#DD8AFF] w-24 rounded" />
            <p className="text-text-muted mt-4">
              OVERVIEW: {projectData.description}
            </p>
            <ul className="text-text-muted max-w-xl mt-4 space-y-3 mt-auto">
              <li>Type: {projectData.type}</li>
              <li>
                Category: {projectData.cat.map((c) => c.label).join(", ")}
              </li>
            </ul>
          </div>
        </section>

        <section className="px-4 lg:px-12 xl:px-24 py-24 space-y-12 bg-linear-to-br from-bg-primary to-bg-secondary border border-border-primary">
          <h2
            className="text-3xl lg:text-7xl max-w-xl mx-auto font-bold text-center relative"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            READY TO
            <br />
            <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
              CRAFT YOUR NEXT VIDEO?
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-center text-text-muted tracking-[1.05]">
            Bring your vision to life with professional video editing that
            delivers.
          </p>
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            <Link
              href="/contact"
              className="drop-shadow-md drop-shadow-accent-hover/25 px-6 py-3 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded text-black font-semibold tracking-[1.05] text-lg"
            >
              REQUEST DEMO
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 bg-bg-secondary border border-border-secondary rounded text-text-primary font-semibold tracking-[1.05] text-lg"
            >
              VIEW SHOWREEL
            </Link>
          </div>
        </section>
      </main>
      <Footer contactInfo={contactInfo} />
    </>
  );
}
