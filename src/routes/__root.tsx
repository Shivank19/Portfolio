import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportAppError } from "../lib/error-reporting";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/Header";
import { profile } from "@/data/profile";
import logoUrl from "@/assets/logo-teal.png";
// import { EasterEgg } from "@/components/EasterEgg";

function FallbackPanel({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 py-24 text-foreground">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card px-7 py-10 shadow-[0_24px_65px_rgba(20,24,28,0.08)] sm:px-12 sm:py-14">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[image:var(--gradient-accent)]" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-20 select-none font-serif text-[15rem] leading-none text-accent/10"
        >
          §
        </span>
        <div className="relative">
          <p className="mb-6 font-mono text-[0.7rem] font-bold uppercase tracking-[0.17em] text-accent">
            {label}
          </p>
          <h1 className="max-w-[11ch] font-serif text-[clamp(2.8rem,9vw,4.5rem)] leading-[1.02] tracking-[-0.035em]">
            {title}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
          {children}
        </div>
      </div>
    </main>
  );
}

function NotFoundComponent() {
  return (
    <FallbackPanel
      label="404 / a wrong turn"
      title="That page wandered off."
      description="This address doesn't lead anywhere. Let's get you back to the portfolio."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-accent-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Back to portfolio
        </Link>
      </div>
    </FallbackPanel>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <FallbackPanel
      label="500 / a brief intermission"
      title="The site hit pause."
      description="This page couldn't load right now. While I get it back up, let's connect on LinkedIn or take a look at my work on GitHub."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-accent-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Connect on LinkedIn ↗
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 font-semibold text-foreground transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Explore GitHub ↗
        </a>
      </div>
      <button
        type="button"
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="mt-7 cursor-pointer text-sm text-muted-foreground underline underline-offset-4 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Try this page again
      </button>
    </FallbackPanel>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shivank Sapra" },
      { name: "description", content: "Shivank Sapra - Portfolio" },
      { name: "author", content: "Shivank Sapra" },
      { property: "og:title", content: "Shivank Sapra" },
      { property: "og:description", content: "Shivank Sapra - Portfolio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: logoUrl },
      { rel: "apple-touch-icon", href: logoUrl },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Header />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        {/* <EasterEgg /> */}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
