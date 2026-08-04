import { useEffect, useState } from "react";

const LINKS = [
  { href: "#metodo", label: "Método" },
  { href: "#incluso", label: "O que inclui" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Header() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setCompact(window.scrollY > 60);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${compact ? "site-header-compact" : ""}`}>
      <div className="container header-inner">
        <span className="logo-text">Artes que Vendem</span>
        <nav className="header-nav" aria-label="Navegação principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
