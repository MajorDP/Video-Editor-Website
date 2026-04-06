import { getProjectData } from "@/app/_lib/services";
import Footer from "../../_components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const allEdits = [
  {
    id: "edit-1",
    title: "Edit 1",
    type: "Youtube Edit",
    cat: [
      { filter: "all", label: "All" },
      { filter: "yt", label: "Youtube" },
    ],
    img: "/heroImg.png",
    featured: true,
    description: "Description of edit 1",
  },
  {
    id: "edit-1",
    title: "Edit 2",
    type: "TikTok Edit",
    cat: [
      { filter: "all", label: "All" },
      { filter: "tt", label: "TikTok" },
    ],
    img: "/heroImg.png",
    featured: true,
    description: "Description of edit 2",
  },
  {
    id: "edit-1",
    title: "Edit 3",
    type: "Youtube Edit",
    cat: [
      { filter: "all", label: "All" },
      { filter: "yt", label: "Youtube" },
    ],
    img: "/heroImg.png",
    featured: true,
    description: "Description of edit 3",
  },
  {
    id: "edit-1",
    title: "Edit 4",
    type: "TikTok Edit",
    cat: [
      { filter: "all", label: "All" },
      { filter: "tt", label: "TikTok" },
    ],
    img: "/heroImg.png",
    featured: true,
    description: "Description of edit 4",
  },
];

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
                PROJECT:
              </span>

              <span className="text-text-primary">PROJECT:</span>

              <br />

              <span className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1 lg:top-5 text-transparent bg-linear-to-br from-accent/50 to-[#DD8AFF]/50 bg-clip-text filter blur-sm opacity-60"
                >
                  {projectData.title}
                </span>

                <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
                  {projectData.title}
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
                REQUEST DEMO
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
