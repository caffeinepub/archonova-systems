import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Cloud Services", href: "/cloud-services" },
  { label: "Microsoft Cloud", href: "/microsoft-cloud" },
  { label: "Google Cloud", href: "/google-cloud" },
  { label: "AWS Services", href: "/aws-services" },
  { label: "Data Center", href: "/data-center" },
  { label: "Software & AI", href: "/software-ai" },
  { label: "Managed IT", href: "/managed-services" },
  { label: "Licensing", href: "/licensing-consulting" },
  { label: "ARCO Platform", href: "/arco" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(31,111,67,0.4)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#ffffff",
                  letterSpacing: "0.04em",
                }}
              >
                Archonova
              </span>
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  color: "#66A37A",
                  letterSpacing: "0.06em",
                }}
              >
                Systems
              </span>
            </div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                color: "#B8B8B8",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              Engineering intelligent technology ecosystems for the modern
              enterprise. Cloud, infrastructure, software, and AI — delivered
              with precision.
            </p>
            <div
              style={{
                marginTop: "16px",
                width: "40px",
                height: "2px",
                background: "linear-gradient(90deg, #1F6F43, #66A37A)",
              }}
            />
          </div>

          {/* Col 2: Nav links */}
          <div>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#66A37A",
                marginBottom: "16px",
              }}
            >
              Services
            </p>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-ocid="nav.link"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.825rem",
                    color: "#B8B8B8",
                    textDecoration: "none",
                    padding: "4px 0",
                    transition: "color 200ms",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#66A37A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#B8B8B8";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#66A37A",
                marginBottom: "16px",
              }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:info@archonovasystems.com"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.825rem",
                  color: "#B8B8B8",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#66A37A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#B8B8B8";
                }}
              >
                <Mail size={13} style={{ color: "#66A37A", flexShrink: 0 }} />
                info@archonovasystems.com
              </a>

              {/* Phone */}
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.825rem",
                  color: "#B8B8B8",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Phone size={13} style={{ color: "#66A37A", flexShrink: 0 }} />
                +91 78377 94951
              </div>

              {/* Address */}
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.78rem",
                  color: "#888888",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  lineHeight: 1.65,
                }}
              >
                <MapPin
                  size={13}
                  style={{ color: "#66A37A", flexShrink: 0, marginTop: "2px" }}
                />
                <div>
                  <div>Unit 603–604, Tower B, Bhutani Alphathum</div>
                  <div>Sector 90, Noida</div>
                  <div>Uttar Pradesh – 201304, India</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                data-ocid="footer.primary_button"
                style={{
                  display: "inline-block",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  padding: "10px 20px",
                  backgroundColor: "#1F6F43",
                  color: "#ffffff",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "background-color 250ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#3D8B5E";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#1F6F43";
                }}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(31,111,67,0.2)",
          padding: "16px 24px",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.775rem",
              color: "#666666",
            }}
          >
            © {year} Archonova Systems. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.775rem",
              color: "#666666",
            }}
          >
            Built with <span style={{ color: "#66A37A" }}>♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#66A37A", textDecoration: "none" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
