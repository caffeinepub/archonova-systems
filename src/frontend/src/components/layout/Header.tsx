import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
  { label: "ARCO", href: "/arco" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "72px",
        backgroundColor: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(31,111,67,0.4)"
          : "1px solid transparent",
        transition:
          "background-color 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col shrink-0"
          data-ocid="nav.link"
          style={{ textDecoration: "none", lineHeight: 1, gap: "2px" }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#ffffff",
                letterSpacing: "0.04em",
              }}
            >
              Archonova
            </span>
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: "#1F6F43",
                letterSpacing: "0.04em",
              }}
            >
              Systems
            </span>
          </div>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "8px",
              color: "#ffffff",
              letterSpacing: "0.06em",
              opacity: 0.85,
              marginTop: "1px",
            }}
          >
            intelligence that keeps businesses aligned
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                data-ocid="nav.link"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  padding: "6px 10px",
                  borderRadius: "4px",
                  color: isActive ? "#66A37A" : "#B8B8B8",
                  textDecoration: "none",
                  borderBottom: isActive
                    ? "1px solid #66A37A"
                    : "1px solid transparent",
                  transition: "color 200ms, border-color 200ms",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color = "#B8B8B8";
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          data-ocid="nav.toggle"
          style={{ color: "#ffffff" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "72px",
            left: 0,
            right: 0,
            backgroundColor: "rgba(10,10,10,0.98)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(31,111,67,0.4)",
            padding: "16px 24px",
          }}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  data-ocid="nav.link"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    padding: "10px 12px",
                    borderRadius: "4px",
                    color: isActive ? "#66A37A" : "#B8B8B8",
                    textDecoration: "none",
                    borderLeft: isActive
                      ? "2px solid #66A37A"
                      : "2px solid transparent",
                    backgroundColor: isActive
                      ? "rgba(102,163,122,0.08)"
                      : "transparent",
                    display: "block",
                    transition: "all 200ms",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
