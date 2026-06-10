import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { location } = useRouterState();
  const onHome = location.pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-serif text-lg tracking-tight">
          <span className="text-accent">·</span> SS
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {onHome ? (
            navItems.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))
          ) : (
            <Link to="/" className="transition-colors hover:text-foreground">
              ← Home
            </Link>
          )}
          {/* <Link
            to="/projects"
            className="transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            All projects
          </Link> */}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
