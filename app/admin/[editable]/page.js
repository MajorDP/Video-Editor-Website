import ContactEditForm from "@/app/_components/adminEditForms/ContactEditForm";
import ExperienceEditForm from "@/app/_components/adminEditForms/ExperienceEditForm";
import ProjectsEditForm from "@/app/_components/adminEditForms/ProjectsEditForm";
import ServicesEditForm from "@/app/_components/adminEditForms/ServicesEditForm";
import StackEditForm from "@/app/_components/adminEditForms/StackEditForm";
import StatsEditForm from "@/app/_components/adminEditForms/StatsEditForm";
import TestimonialsEditForm from "@/app/_components/adminEditForms/TestimonialsEditForm";
import { getAdminData } from "@/app/_lib/services";
import Image from "next/image";

export default async function Page({ params }) {
  const { editable } = await params;

  const { error, data } = await getAdminData();

  //TODO: add save functionality
  const handleSave = async () => {
    "use server";
  };

  const options = {
    stats: {
      label: "STATS",
      form: <StatsEditForm data={data.stats} onSave={handleSave} />,
    },
    projects: {
      label: "PROJECTS",
      form: <ProjectsEditForm data={data.allEdits} onSave={handleSave} />,
    },
    testimonials: {
      label: "TESTIMONIALS",
      form: (
        <TestimonialsEditForm data={data.testimonials} onSave={handleSave} />
      ),
    },
    services: {
      label: "SERVICES",
      form: <ServicesEditForm data={data.services} onSave={handleSave} />,
    },
    experience: {
      label: "EXPERIENCE",
      form: <ExperienceEditForm data={data.experience} onSave={handleSave} />,
    },
    stack: {
      label: "TECH STACK",
      form: <StackEditForm data={data.stack} onSave={handleSave} />,
    },
    contactInfo: {
      label: "CONTACT INFO",
      form: <ContactEditForm data={data.contactInfo} onSave={handleSave} />,
    },
  };

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
              EDIT
            </span>

            <span className="text-text-primary">EDIT</span>

            <br />

            <span className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1 lg:top-5 text-transparent bg-linear-to-br from-accent/50 to-[#DD8AFF]/50 bg-clip-text filter blur-sm opacity-60"
              >
                {options[editable].label}
              </span>

              <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
                {options[editable].label}
              </span>
            </span>
          </h1>
          <p className="max-w-xl text-text-muted tracking-[1.05]">
            Select the content you would like to edit.
          </p>
        </div>
      </section>
      <section>{options[editable].form}</section>
    </main>
  );
}
