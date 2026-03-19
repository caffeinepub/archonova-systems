import { useEffect } from "react";

const logos = [
  { src: "/assets/uploads/tenz-logo-1.jpg", alt: "Tenz Infotech", hasBg: true },
  {
    src: "/assets/uploads/logo-white-2.png",
    alt: "Netforchoice Data Center",
    hasBg: false,
  },
  {
    src: "/assets/uploads/Prath-3.png",
    alt: "Prath Technologies",
    hasBg: false,
  },
  {
    src: "/assets/uploads/AP-UPDATED-LOGO-e1673865231618-4.png",
    alt: "Adesanya & Partners",
    hasBg: false,
  },
  {
    src: "/assets/uploads/NET2SECURE_com-5.png",
    alt: "Net2Secure",
    hasBg: false,
  },
  {
    src: "/assets/uploads/logo-1758148314-6.jpg",
    alt: "SC Total IT Solutions",
    hasBg: true,
  },
  {
    src: "/assets/uploads/CIT-logo-7.png",
    alt: "Capital Infra Trust",
    hasBg: false,
  },
];

// Duplicate for seamless infinite loop — stable keys use copy prefix
const trackLogos = [
  ...logos.map((l, i) => ({ ...l, key: `a-${i}` })),
  ...logos.map((l, i) => ({ ...l, key: `b-${i}` })),
];

export function ClientsPartners() {
  useEffect(() => {
    const styleId = "clients-partners-keyframes";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 25s linear infinite;
          display: flex;
          align-items: center;
          width: max-content;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
        .logo-item {
          flex-shrink: 0;
          margin: 0 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-item img {
          height: 56px;
          max-width: 160px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%) brightness(0.85);
          transition: filter 300ms ease, transform 300ms ease;
          border-radius: 6px;
        }
        .logo-item img.has-bg {
          padding: 6px 10px;
          background: rgba(255,255,255,0.06);
          border-radius: 8px;
        }
        .logo-item:hover img {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.06);
        }
        @media (max-width: 640px) {
          .logo-item {
            margin: 0 24px;
          }
          .logo-item img {
            height: 44px;
            max-width: 120px;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(31, 111, 67, 0.2)",
        borderBottom: "1px solid rgba(31, 111, 67, 0.1)",
        padding: "48px 0",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(18px, 2vw, 26px)",
            color: "#FFFFFF",
            marginBottom: "8px",
            letterSpacing: "-0.01em",
          }}
        >
          Our Clients &amp; Partners
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#A0A0A0",
            marginBottom: 0,
          }}
        >
          Trusted by organizations across industries and technology ecosystems
        </p>
      </div>

      {/* Scrolling strip */}
      <div
        className="marquee-wrapper"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, #0A0A0A 10%, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, #0A0A0A 10%, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Track — logos duplicated for seamless loop */}
        <div className="marquee-track">
          {trackLogos.map((logo) => (
            <div key={logo.key} className="logo-item">
              <img
                src={logo.src}
                alt={logo.alt}
                className={logo.hasBg ? "has-bg" : ""}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
