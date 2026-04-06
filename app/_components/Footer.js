import Link from "next/link";

export default async function Footer({ contactInfo }) {
  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/portfolio",
      label: "Portfolio",
    },
    {
      href: "/services",
      label: "Services",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <footer className="bg-bg-primary text-text-secondary py-16 px-6 md:px-12 xl:px-32 border-t border-border-secondary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h2 className="font-bold mb-4">LOGO/NAME</h2>
          <p className="text-sm max-w-xs">
            Short SEO-Optimized text providing clear value proposition for
            potential clients.
          </p>
        </div>

        <div className="block md:hidden">
          <h3 className="font-semibold mb-4">Contact & Social</h3>
          <p className="text-text-muted mb-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-accent"
            >
              {contactInfo.email}
            </a>
            <br />
            <a href="tel:+1234567890" className="hover:text-accent">
              {contactInfo.phone}
            </a>
          </p>

          <div className="flex gap-4">
            {contactInfo.socialMedia.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.label}
                className="hover:text-accent transition"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>

        <div className="md:border-l md:border-border-primary md:pl-2">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-row flex-wrap gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-accent transition text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block md:border-l md:border-border-primary md:pl-2 text-sm space-y-4">
          <h3 className="font-semibold text-base">Contact & Social</h3>
          <p className="">
            <a href="mailto:emailhere@abv.bg" className="hover:text-accent">
              {contactInfo.email}
            </a>
            <br />
            <a href="tel:+1234567890" className="hover:text-accent">
              {contactInfo.phone}
            </a>
          </p>
          <div className="flex gap-4">
            {contactInfo.socialMedia.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.label}
                className="hover:text-accent transition"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border-primary pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
        <p>© {new Date().getFullYear()} NAME. All rights reserved.</p>
        {/* <ul className="flex gap-6 mt-4 md:mt-0">
          <li>
            <Link
              href="/privacy-policy"
              className="hover:text-accent transition"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/terms-of-service"
              className="hover:text-accent transition"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/sitemap.xml" className="hover:text-accent transition">
              Sitemap
            </Link>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}
