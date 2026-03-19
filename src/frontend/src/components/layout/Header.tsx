import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SERVICE_ROUTES = [
  "/cloud-services",
  "/microsoft-cloud",
  "/google-cloud",
  "/aws-services",
  "/data-center",
  "/software-ai",
  "/managed-services",
  "/licensing-consulting",
  "/training",
];

const CLOUD_SUB_ROUTES = ["/microsoft-cloud", "/google-cloud", "/aws-services"];

const cloudSubItems = [
  { label: "Microsoft", href: "/microsoft-cloud" },
  { label: "Google", href: "/google-cloud" },
  { label: "AWS", href: "/aws-services" },
];

const serviceItems = [
  { label: "Data Center", href: "/data-center" },
  { label: "Software & AI", href: "/software-ai" },
  { label: "Managed IT", href: "/managed-services" },
  { label: "Licensing", href: "/licensing-consulting" },
  { label: "Training", href: "/training" },
];

const topLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "ARCO", href: "/arco" },
  { label: "Contact", href: "/contact" },
];

// Styles
const navLinkStyle = (isActive: boolean): React.CSSProperties => ({
  fontFamily: "Inter, sans-serif",
  fontSize: "0.8rem",
  fontWeight: 500,
  padding: "6px 10px",
  borderRadius: "4px",
  color: isActive ? "#66A37A" : "#B8B8B8",
  textDecoration: "none",
  borderBottom: isActive ? "1px solid #66A37A" : "1px solid transparent",
  transition: "color 200ms, border-color 200ms",
  whiteSpace: "nowrap" as const,
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "3px",
});

const dropdownItemStyle = (isActive: boolean): React.CSSProperties => ({
  fontFamily: "Inter, sans-serif",
  fontSize: "0.8rem",
  fontWeight: 500,
  padding: "8px 14px",
  color: isActive ? "#66A37A" : "#B8B8B8",
  textDecoration: "none",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  whiteSpace: "nowrap" as const,
  transition: "color 200ms, background 200ms",
  cursor: "pointer",
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [cloudOpen, setCloudOpen] = useState(false);
  // Mobile accordion
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCloudOpen, setMobileCloudOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cloudTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isServicesActive = SERVICE_ROUTES.includes(currentPath);
  const isCloudActive =
    CLOUD_SUB_ROUTES.includes(currentPath) || currentPath === "/cloud-services";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
        setCloudOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    servicesTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
      setCloudOpen(false);
    }, 150);
  };
  const handleCloudEnter = () => {
    if (cloudTimerRef.current) clearTimeout(cloudTimerRef.current);
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    setCloudOpen(true);
  };
  const handleCloudLeave = () => {
    cloudTimerRef.current = setTimeout(() => setCloudOpen(false), 150);
  };

  const dropdownPanelStyle: React.CSSProperties = {
    position: "absolute",
    top: "calc(100% + 4px)",
    left: 0,
    minWidth: "200px",
    backgroundColor: "rgba(14,14,14,0.98)",
    border: "1px solid rgba(31,111,67,0.4)",
    borderRadius: "6px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
    padding: "6px",
    zIndex: 100,
    opacity: servicesOpen ? 1 : 0,
    transform: servicesOpen ? "translateY(0)" : "translateY(-6px)",
    pointerEvents: servicesOpen ? "auto" : "none",
    transition: "opacity 200ms, transform 200ms",
  };

  const cloudFlyoutStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: "calc(100% + 4px)",
    minWidth: "180px",
    backgroundColor: "rgba(14,14,14,0.98)",
    border: "1px solid rgba(31,111,67,0.4)",
    borderRadius: "6px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
    padding: "6px",
    zIndex: 101,
    opacity: cloudOpen ? 1 : 0,
    transform: cloudOpen ? "translateX(0)" : "translateX(-6px)",
    pointerEvents: cloudOpen ? "auto" : "none",
    transition: "opacity 200ms, transform 200ms",
  };

  const hoverItem = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = "#ffffff";
    (e.currentTarget as HTMLElement).style.background = "rgba(31,111,67,0.12)";
  };
  const unhoverItem = (e: React.MouseEvent<HTMLElement>, isActive: boolean) => {
    (e.currentTarget as HTMLElement).style.color = isActive
      ? "#66A37A"
      : "#B8B8B8";
    (e.currentTarget as HTMLElement).style.background = "transparent";
  };

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
                  fontSize: "22px",
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
                  fontSize: "19px",
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
                fontSize: "11px",
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
          {/* Home & About */}
          {topLinks.slice(0, 2).map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                data-ocid="nav.link"
                style={navLinkStyle(isActive)}
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

          {/* Services Dropdown */}
          <div
            ref={servicesRef}
            style={{ position: "relative" }}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              type="button"
              data-ocid="nav.services.button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-label="Services menu"
              style={{
                ...navLinkStyle(isServicesActive),
                borderBottom: isServicesActive
                  ? "1px solid #66A37A"
                  : "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (!isServicesActive)
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                if (!isServicesActive)
                  (e.currentTarget as HTMLElement).style.color = "#B8B8B8";
              }}
            >
              Services
              <ChevronDown
                size={13}
                style={{
                  transition: "transform 200ms",
                  transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {/* Services Dropdown Panel */}
            <div
              style={dropdownPanelStyle}
              role="menu"
              aria-label="Services menu"
            >
              {/* Cloud Services with nested flyout */}
              <div
                style={{ position: "relative" }}
                onMouseEnter={handleCloudEnter}
                onMouseLeave={handleCloudLeave}
              >
                <Link
                  to="/cloud-services"
                  data-ocid="nav.cloud_services.button"
                  aria-haspopup="true"
                  aria-expanded={cloudOpen}
                  aria-label="Cloud Services submenu"
                  style={dropdownItemStyle(isCloudActive)}
                  onMouseEnter={hoverItem}
                  onMouseLeave={(e) => unhoverItem(e, isCloudActive)}
                >
                  Cloud Computing
                  <ChevronRight
                    size={13}
                    style={{ marginLeft: "8px", color: "#1F6F43" }}
                  />
                </Link>

                {/* Cloud Sub-flyout */}
                <div
                  style={cloudFlyoutStyle}
                  role="menu"
                  aria-label="Cloud Services submenu"
                >
                  {cloudSubItems.map((item) => {
                    const active = currentPath === item.href;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        data-ocid="nav.link"
                        style={dropdownItemStyle(active)}
                        onMouseEnter={hoverItem}
                        onMouseLeave={(e) => unhoverItem(e, active)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Other service links */}
              {serviceItems.map((item) => {
                const active = currentPath === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    data-ocid="nav.link"
                    style={dropdownItemStyle(active)}
                    onMouseEnter={hoverItem}
                    onMouseLeave={(e) => unhoverItem(e, active)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ARCO & Contact */}
          {topLinks.slice(2).map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                data-ocid="nav.link"
                style={navLinkStyle(isActive)}
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
            maxHeight: "calc(100vh - 72px)",
            overflowY: "auto",
          }}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {/* Home & About */}
            {topLinks.slice(0, 2).map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  data-ocid="nav.link"
                  onClick={() => setMenuOpen(false)}
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

            {/* Services Accordion */}
            <div>
              <button
                type="button"
                data-ocid="nav.services.button"
                aria-haspopup="true"
                aria-expanded={mobileServicesOpen}
                aria-label="Services menu"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  padding: "10px 12px",
                  borderRadius: "4px",
                  color: isServicesActive ? "#66A37A" : "#B8B8B8",
                  borderLeft: isServicesActive
                    ? "2px solid #66A37A"
                    : "2px solid transparent",
                  backgroundColor: isServicesActive
                    ? "rgba(102,163,122,0.08)"
                    : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  background: isServicesActive
                    ? "rgba(102,163,122,0.08)"
                    : "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                Services
                <ChevronDown
                  size={16}
                  style={{
                    transition: "transform 200ms",
                    transform: mobileServicesOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </button>

              {mobileServicesOpen && (
                <div style={{ marginLeft: "16px" }}>
                  {/* Cloud Services Sub-Accordion */}
                  <div>
                    <button
                      type="button"
                      data-ocid="nav.cloud_services.button"
                      aria-haspopup="true"
                      aria-expanded={mobileCloudOpen}
                      aria-label="Cloud Services submenu"
                      onClick={() => setMobileCloudOpen(!mobileCloudOpen)}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        padding: "8px 12px",
                        borderRadius: "4px",
                        color: isCloudActive ? "#66A37A" : "#B8B8B8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      Cloud Computing
                      <ChevronDown
                        size={14}
                        style={{
                          transition: "transform 200ms",
                          transform: mobileCloudOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </button>

                    {mobileCloudOpen && (
                      <div style={{ marginLeft: "16px" }}>
                        <Link
                          to="/cloud-services"
                          data-ocid="nav.link"
                          onClick={() => setMenuOpen(false)}
                          style={{
                            display: "block",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.82rem",
                            fontWeight: 500,
                            padding: "7px 12px",
                            borderRadius: "4px",
                            color:
                              currentPath === "/cloud-services"
                                ? "#66A37A"
                                : "#B8B8B8",
                            textDecoration: "none",
                          }}
                        >
                          Cloud Computing
                        </Link>
                        {cloudSubItems.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            data-ocid="nav.link"
                            onClick={() => setMenuOpen(false)}
                            style={{
                              display: "block",
                              fontFamily: "Inter, sans-serif",
                              fontSize: "0.82rem",
                              fontWeight: 500,
                              padding: "7px 12px",
                              borderRadius: "4px",
                              color:
                                currentPath === item.href
                                  ? "#66A37A"
                                  : "#B8B8B8",
                              textDecoration: "none",
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Other service links */}
                  {serviceItems.map((item) => {
                    const active = currentPath === item.href;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        data-ocid="nav.link"
                        onClick={() => setMenuOpen(false)}
                        style={{
                          display: "block",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          padding: "8px 12px",
                          borderRadius: "4px",
                          color: active ? "#66A37A" : "#B8B8B8",
                          textDecoration: "none",
                        }}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ARCO & Contact */}
            {topLinks.slice(2).map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  data-ocid="nav.link"
                  onClick={() => setMenuOpen(false)}
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
