import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileText,
  Gauge,
  GraduationCap,
  HardHat,
  Mail,
  MapPinned,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { siteContent, type IconKey } from "@/data/site-content";
import styles from "./page.module.css";

const iconMap: Record<IconKey, LucideIcon> = {
  shield: ShieldCheck,
  truck: Truck,
  clipboard: ClipboardCheck,
  training: GraduationCap,
  gauge: Gauge,
  map: MapPinned,
  file: FileText,
  hardhat: HardHat,
  spark: Sparkles,
  phone: Phone,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteContent.brand.name,
  alternateName: siteContent.brand.shortName,
  url: "https://mountrockpowder.com/",
  email: siteContent.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quezon City",
    addressCountry: "PH",
  },
  description: siteContent.brand.seoDescription,
};

function IconBadge({ icon }: { icon: IconKey }) {
  const Icon = iconMap[icon];

  return (
    <span className={styles.iconBadge} aria-hidden="true">
      <Icon size={22} strokeWidth={1.8} />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <header className={styles.siteHeader}>
        <a className={styles.logoLink} href="#top" aria-label="MRPC home">
          <Image
            src="/images/mrpc-logo-wide.png"
            alt="Mount Rock Powder Corporation"
            width={800}
            height={146}
            priority
          />
        </a>
        <nav className={styles.navLinks} aria-label="Primary navigation">
          {siteContent.navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className={styles.hero} aria-labelledby="hero-title">
          <Image
            className={styles.heroImage}
            src={siteContent.hero.image}
            alt={siteContent.hero.imageAlt}
            fill
            sizes="100vw"
            priority
          />
          <div className={styles.heroShade} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>{siteContent.hero.eyebrow}</p>
            <h1 id="hero-title">{siteContent.hero.headline}</h1>
            <p className={styles.heroSummary}>{siteContent.hero.summary}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">
                <Mail size={18} />
                {siteContent.hero.primaryCta}
              </a>
              <a className={styles.secondaryButton} href="#capabilities">
                {siteContent.hero.secondaryCta}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className={styles.proofStrip} aria-label="Company proof points">
          {siteContent.proofPoints.map((point) => (
            <article className={styles.proofItem} key={point.label}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </article>
          ))}
        </section>

        <section className={styles.introBand} aria-labelledby="intro-title">
          <div className={styles.sectionShell}>
            <div className={styles.splitIntro}>
              <div>
                <p className={styles.kicker}>Modernized positioning</p>
                <h2 id="intro-title">{siteContent.safetyCommitment.title}</h2>
                <p>{siteContent.safetyCommitment.body}</p>
                <div className={styles.noteBox}>
                  <BadgeCheck size={20} />
                  <span>{siteContent.safetyCommitment.callout}</span>
                </div>
              </div>
              <figure className={styles.historyFigure}>
                <Image
                  src={siteContent.history.image}
                  alt={siteContent.history.imageAlt}
                  width={800}
                  height={600}
                  sizes="(max-width: 900px) 100vw, 42vw"
                />
                <figcaption>
                  <strong>{siteContent.history.title}</strong>
                  <span>{siteContent.history.body}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section
          className={styles.sectionBand}
          id="capabilities"
          aria-labelledby="capabilities-title"
        >
          <div className={styles.sectionShell}>
            <div className={styles.sectionHeader}>
              <p className={styles.kicker}>Capabilities</p>
              <h2 id="capabilities-title">
                Package MRPC as a complete blasting partner, not only a supplier.
              </h2>
              <p>
                These cards translate the old product-and-service lists into
                executive-ready buying paths.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {siteContent.capabilities.map((capability) => (
                <article className={styles.card} key={capability.title}>
                  <IconBadge icon={capability.icon} />
                  <h3>{capability.title}</h3>
                  <p>{capability.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.productBand}
          id="products"
          aria-labelledby="products-title"
        >
          <div className={styles.sectionShell}>
            <div className={styles.productLayout}>
              <div>
                <p className={styles.kicker}>Products and services</p>
                <h2 id="products-title">
                  A cleaner path for procurement, engineers, and safety teams.
                </h2>
                <p>
                  Product pages should be grouped by application, supported with
                  current SDS/TDS records, and paired with a technical CTA.
                </p>
              </div>
              <div className={styles.productCards}>
                {siteContent.products.map((product) => (
                  <article className={styles.productCard} key={product.category}>
                    <h3>{product.category}</h3>
                    <ul>
                      {product.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p>{product.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.safetyBand}
          id="safety"
          aria-labelledby="safety-title"
        >
          <div className={styles.sectionShell}>
            <div className={styles.safetyLayout}>
              <div>
                <p className={styles.kicker}>Safety and compliance</p>
                <h2 id="safety-title">
                  Make the safety promise visible through process.
                </h2>
                <p>
                  The public website should show buyers how a high-risk project
                  moves from inquiry to controlled execution. That builds trust
                  before a sales conversation begins.
                </p>
                <a className={styles.inlineLink} href="#resources">
                  Review resource model
                  <ArrowRight size={18} />
                </a>
              </div>
              <ol className={styles.processList}>
                {siteContent.operatingModel.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className={styles.coverageBand} aria-labelledby="coverage-title">
          <div className={styles.sectionShell}>
            <div className={styles.coverageLayout}>
              <div className={styles.coverageMap}>
                <Image
                  src={siteContent.coverage.image}
                  alt={siteContent.coverage.imageAlt}
                  width={1920}
                  height={1080}
                  sizes="(max-width: 900px) 100vw, 44vw"
                />
              </div>
              <div>
                <p className={styles.kicker}>Coverage</p>
                <h2 id="coverage-title">{siteContent.coverage.title}</h2>
                <p>{siteContent.coverage.body}</p>
                <div className={styles.regionList}>
                  {siteContent.coverage.regions.map((region) => (
                    <span key={region}>
                      <MapPinned size={16} />
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.sectionBand}
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className={styles.sectionShell}>
            <div className={styles.sectionHeader}>
              <p className={styles.kicker}>Project proof</p>
              <h2 id="projects-title">
                Turn old project listings into case studies executives can trust.
              </h2>
              <p>
                Each future case study should show the operating challenge, the
                MRPC approach, safety controls, and the customer-approved result.
              </p>
            </div>
            <div className={styles.projectGrid}>
              {siteContent.projectTypes.map((project) => (
                <article className={styles.projectCard} key={project.title}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1920}
                    height={1080}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                  <div>
                    <span>{project.sector}</span>
                    <h3>{project.title}</h3>
                    <p>{project.outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.resourceBand}
          id="resources"
          aria-labelledby="resources-title"
        >
          <div className={styles.sectionShell}>
            <div className={styles.resourceLayout}>
              <div>
                <p className={styles.kicker}>Resource hub</p>
                <h2 id="resources-title">
                  Build a controlled library instead of a file dump.
                </h2>
                <p>
                  This is where MRPC can look current: versioned safety data,
                  permit preparation guidance, and practical technical resources.
                </p>
              </div>
              <div className={styles.resourceGrid}>
                {siteContent.resources.map((resource) => (
                  <article className={styles.resourceItem} key={resource.title}>
                    <IconBadge icon={resource.icon} />
                    <div>
                      <h3>{resource.title}</h3>
                      <p>{resource.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.contactBand}
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className={styles.sectionShell}>
            <div className={styles.contactLayout}>
              <div>
                <p className={styles.kicker}>Contact flow</p>
                <h2 id="contact-title">{siteContent.contact.title}</h2>
                <p>{siteContent.contact.body}</p>
                <div className={styles.contactMethods}>
                  <a href={`mailto:${siteContent.contact.email}`}>
                    <Mail size={18} />
                    {siteContent.contact.email}
                  </a>
                  <span>
                    <Phone size={18} />
                    {siteContent.contact.phone}
                  </span>
                </div>
              </div>
              <form
                className={styles.contactForm}
                action={`mailto:${siteContent.contact.email}`}
                method="post"
                encType="text/plain"
              >
                <label>
                  Inquiry type
                  <select name="inquiry-type" defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    {siteContent.contact.inquiryTypes.map((type) => (
                      <option value={type} key={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Name and company
                  <input name="name-company" placeholder="Juan Dela Cruz, ABC Mining" />
                </label>
                <label>
                  Project location
                  <input name="project-location" placeholder="Province or site area" />
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Briefly describe the requirement, timeline, and current project stage."
                  />
                </label>
                <button className={styles.primaryButton} type="submit">
                  <Send size={18} />
                  Draft email inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <strong>{siteContent.brand.name}</strong>
          <span>{siteContent.brand.descriptor}</span>
        </div>
        <div>
          <span>{siteContent.contact.office}</span>
          <span>Prototype content for executive review - 2026</span>
        </div>
      </footer>
    </>
  );
}
