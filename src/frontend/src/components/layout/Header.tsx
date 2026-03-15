import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Cloud Services", href: "/cloud-services" },
  { label: "Microsoft", href: "/microsoft-cloud" },
  { label: "Google", href: "/google-cloud" },
  { label: "AWS", href: "/aws-services" },
  { label: "Data Center", href: "/data-center" },
  { label: "Software & AI", href: "/software-ai" },
  { label: "Managed IT", href: "/managed-services" },
  { label: "Licensing", href: "/licensing-consulting" },
  { label: "Training", href: "/training" },
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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          "background-color 300ms, backdrop-filter 300ms, border-color 300ms",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          data-ocid="nav.link"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
              gap: "2px",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "baseline", gap: "4px" }}
            >
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
          </div>
        </Link>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main navigation"
          style={{ marginLeft: "48px" }}
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
          style={{ color: "#ffffff", marginLeft: "auto" }}
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
