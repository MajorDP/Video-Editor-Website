import Image from "next/image";
import { getContactPageData } from "../_lib/services";
import Footer from "../_components/Footer";

export default async function Page() {
  const { error, data } = await getContactPageData();

  const { contactInfo } = data;

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
                LET&apos;S
              </span>
              <span className="text-text-primary">LET&apos;S</span>
              <br />
              <span className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1 lg:top-5 text-transparent bg-linear-to-br from-accent/50 to-[#DD8AFF]/50 bg-clip-text filter blur-sm opacity-60"
                >
                  SYNC VISIONS
                </span>

                <span className="relative bg-linear-to-br from-accent to-[#DD8AFF] bg-clip-text text-transparent">
                  SYNC VISIONS
                </span>
              </span>
              <br />
              TOGETHER
            </h1>
            <p className="max-w-xl text-text-muted tracking-[1.05]">
              Name Named - Video editor with 5+ years of experience. Crafting
              cinematic stories that drive results for creators and top-tier
              brands.
            </p>
          </div>
        </section>
        <section className="px-4 lg:px-12 xl:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-[#DD8AFF]/80 font-bold tracking-[1.05]">
              CONTACT INFORMATION:
            </h2>
            <div className="space-y-8 text-text-muted">
              <div className="space-y-4">
                <p className="flex flex-row items-center gap-4 group">
                  <span className="w-10 h-10 p-4 fontsem flex items-center justify-center text-[#DD8AFF] bg-bg-secondary rounded border border-border-secondary lg:border-border-primary lg:group-hover:border-border-secondary text-3xl duration-200">
                    ✉
                  </span>

                  <span className="font-semibold">Email:</span>
                </p>
                <p className="text-xl text-text-primary tracking-[1.05]">
                  {contactInfo.email.toUpperCase()}
                </p>
              </div>
              <div className="space-y-4">
                <p className="flex flex-row items-center gap-4 group">
                  <span className="w-10 h-10 p-4 flex items-center justify-center text-[#DD8AFF] bg-bg-secondary rounded border border-border-secondary lg:border-border-primary lg:group-hover:border-border-secondary text-3xl duration-200">
                    ☏
                  </span>
                  <span className="font-semibold">Phone:</span>
                </p>
                <p className="text-xl text-text-primary tracking-[1.05]">
                  {contactInfo.phone.toUpperCase()}
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-[#DD8AFF]/80 font-bold tracking-[1.05]">
                  LOCATION:
                </h2>
                <div className="border w-fit p-4 rounded border-border-secondary space-y-2">
                  <p className="font-semibold text-text-muted tracking-[1.05]">
                    {contactInfo.location.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6 border border-border-secondary p-4 lg:p-8 rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-accent"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-accent"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Project Type (YouTube, Ads, Short-form...)"
              className="w-full p-4 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-accent"
            />

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              className="w-full p-4 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-accent resize-none"
              required
            />

            <button
              type="submit"
              className="w-full py-4 bg-linear-to-br from-accent to-accent-hover hover:from-accent-hover/20 hover:to-accent-hover/20 border border-accent hover:text-accent transition duration-200 rounded font-semibold text-black cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer contactInfo={contactInfo} />
    </>
  );
}
