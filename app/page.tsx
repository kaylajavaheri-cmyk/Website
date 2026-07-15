import EntryGate from "@/components/EntryGate";
import RevealObserver from "@/components/RevealObserver";
import WwLogo from "@/components/WwLogo";

/* ── Data ─────────────────────────────────────────────── */

const services = [
  {
    name: "Talent Management",
    desc: "We represent holistic health creators — the voices that move audiences and shape how people think about their bodies, food, and wellness.",
    category: "Representation",
  },
  {
    name: "Influencer & Affiliate Programs",
    desc: "Scale your affiliate channel with precision: recruitment strategy, commission architecture, performance tracking, and ongoing partner management.",
    category: "Performance",
  },
  {
    name: "UGC Content Funnel",
    desc: "End-to-end creator vetting, script writing, and creative brief development. We build the infrastructure so your brand gets consistent, on-brand content.",
    category: "Content",
  },
  {
    name: "Social Media Strategy",
    desc: "Platform-specific strategies that earn real attention — audience mapping, posting cadence, growth levers, and monthly reporting.",
    category: "Strategy",
  },
  {
    name: "Creative Direction",
    desc: "Art direction and full creative guidance for photoshoots: concept, set, talent, and final selects that feel like your brand, elevated.",
    category: "Creative",
  },
];

const talent = [
  {
    handle: "@alexcbolivar",
    name: "Alex Bolivar",
    bio: "Functional medicine educator turning complex health concepts into daily habits for 800K+ followers.",
    creator: "alex",
    initial: "A",
  },
  {
    handle: "@holistichealingla",
    name: "Holistic Healing LA",
    bio: "LA-based wellness collective bridging integrative medicine with accessible, community-driven content.",
    creator: "holistic",
    initial: "H",
  },
  {
    handle: "@the_detoxmama",
    name: "The Detox Mama",
    bio: "Clean living advocate with a loyal community of mothers navigating toxin-free, whole-family wellness.",
    creator: "detox",
    initial: "D",
  },
];

const brands = [
  "Plunge",
  "Litesport",
  "Akasha Superfoods",
  "Kono Nutrition",
  "Zuma Nutrition",
  "Evie Ring",
  "Chef Bae",
];

/* ── Page ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* Entry gate overlay — fixed, z-index 1000, covers everything */}
      <EntryGate />

      {/* Scroll reveal observer — renders nothing, sets up IntersectionObserver */}
      <RevealObserver />

      {/* ── Navigation ── */}
      <nav className="nav" aria-label="Primary navigation">
        <span className="nav-wordmark">
          Wyld <span>West</span>
        </span>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#talent">Talent</a></li>
          <li><a href="#brands">Brands</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ── Hero ── */}
      <section id="hero" className="hero" aria-labelledby="hero-heading">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />

        <div className="hero-content">
          <div data-reveal>
            <WwLogo className="hero-mark" aria-hidden="true" />
          </div>

          <h1
            id="hero-heading"
            className="hero-title"
            data-reveal
            data-reveal-delay="100"
          >
            Built for the<br />
            <em>wild side</em><br />
            of wellness.
          </h1>

          <div className="hero-divider" aria-hidden="true" data-reveal data-reveal-delay="180" />

          <p className="hero-sub" data-reveal data-reveal-delay="240">
            Wyld West is a marketing agency for health-forward brands — talent
            management, influencer programs, content strategy, and creative
            direction under one roof.
          </p>

          <a
            href="#services"
            className="hero-cta"
            data-reveal
            data-reveal-delay="320"
          >
            Our services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 2L7 12M7 12L3 8M7 12L11 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="services" aria-labelledby="services-heading">
        <div className="services-inner">
          <div data-reveal>
            <p className="section-label">What we do</p>
            <h2 id="services-heading" className="section-heading">
              Full-stack marketing for brands that mean it.
            </h2>
          </div>

          <ul className="services-list" role="list">
            {services.map((s, i) => (
              <li
                key={s.name}
                className="service-row"
                data-reveal
                data-reveal-delay={String(i * 80)}
              >
                <h3 className="service-name">{s.name}</h3>
                <p className="service-desc">{s.desc}</p>
                <span className="service-category" aria-label={`Category: ${s.category}`}>
                  {s.category}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Talent ── */}
      <section id="talent" className="talent" aria-labelledby="talent-heading">
        <div className="talent-inner">
          <div data-reveal>
            <h2 id="talent-heading" className="section-heading">
              Voices that move people.
            </h2>
          </div>

          <ul className="talent-grid" role="list">
            {talent.map((t, i) => (
              <li
                key={t.handle}
                className="talent-card"
                data-reveal
                data-reveal-delay={String(i * 120)}
              >
                {/* Replace with real photos — use Next.js <Image> component */}
                <div className="talent-photo" aria-hidden="true">
                  <div
                    className="talent-photo-bg"
                    data-creator={t.creator}
                    aria-hidden="true"
                  >
                    {t.initial}
                  </div>
                </div>
                <div className="talent-meta">
                  <p className="talent-handle">{t.handle}</p>
                  <p className="talent-name">{t.name}</p>
                  <p className="talent-bio">{t.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Brands ── */}
      <section id="brands" className="brands" aria-labelledby="brands-heading">
        <div className="brands-inner">
          <div data-reveal>
            <h2 id="brands-heading" className="section-heading">
              From challenger<br />to category leader.
            </h2>
          </div>

          <div className="brands-wrap">
            <ul className="brands-flow" role="list" data-reveal data-reveal-delay="100" aria-label="Partner brands">
              {brands.map((brand) => (
                <li key={brand} className="brand-item">
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="contact" aria-labelledby="contact-heading">
        <div className="contact-inner">
          <div data-reveal>
            <h2 id="contact-heading" className="contact-heading">
              Ready to grow?
            </h2>
            <p className="contact-body">
              Whether you&apos;re launching a brand, scaling an affiliate program, or
              looking to represent your talent — let&apos;s talk.
            </p>
          </div>

          <div className="contact-actions" data-reveal data-reveal-delay="120">
            <a
              href="mailto:hello@wyldwest.co"
              className="contact-btn"
              aria-label="Send an email to Wyld West"
            >
              Get in touch
            </a>
            <p className="contact-social">
              Follow along on{" "}
              <a
                href="https://instagram.com/wyldwest"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Wyld West on Instagram (opens in new tab)"
              >
                @wyldwest
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <p className="footer-copy">© 2024 Wyld West. All rights reserved.</p>
        <p className="footer-tagline">Marketing for health-forward brands.</p>
      </footer>
    </>
  );
}
