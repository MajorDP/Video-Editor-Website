import Image from "next/image";
import Link from "next/link";
import { getPortfolioPageData } from "../_lib/services";
import Projects from "../_components/Projects";
import Footer from "../_components/Footer";

export default async function Page() {
  const { error, data } = await getPortfolioPageData();

  const { allEdits, contactInfo } = data;

  const categories = allEdits.reduce((catsAcc, edit) => {
    edit.cat.forEach((currCat) => {
      if (!catsAcc.some((categ) => categ.filter === currCat.filter)) {
        catsAcc.push(currCat);
      }
    });

    return catsAcc;
  }, []);

  console.log("categories:", categories);

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
              className="text-3xl md:text-8xl font-bold relative"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 text-transparent bg-accent-hover/25 bg-clip-text filter blur-sm opacity-60"
              >
                SELECTED
              </span>

              <span className="text-text-primary">SELECTED</span>

              <br />

              <span className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1 lg:top-5 text-transparent bg-linear-to-br from-accent/50 to-[#DD8AFF]/50 bg-clip-text filter blur-sm opacity-60"
                >
                  PROJECTS
                </span>

                <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
                  PROJECTS
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

        <Projects allEdits={allEdits} categories={categories} />

        <section className="px-4 lg:px-12 xl:px-24 py-24 space-y-12 bg-linear-to-br from-bg-primary to-bg-secondary border border-border-primary">
          <h2
            className="text-3xl lg:text-7xl max-w-xl mx-auto font-bold text-center relative"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            HAVE A
            <br />
            <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
              VISION?
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
