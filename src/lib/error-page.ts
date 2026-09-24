import { profile } from "../data/profile";

export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Site intermission · Shivank Sapra</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&amp;display=swap" />
    <style>
      :root {
        --background: #f3f0e8;
        --surface: rgba(255, 255, 255, 0.78);
        --text: #14181c;
        --muted: #646e79;
        --accent: #245d59;
        --accent-strong: #173f3c;
        --accent-text: #ffffff;
        --border: rgba(20, 24, 28, 0.12);
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --background: #101418;
          --surface: rgba(24, 29, 34, 0.78);
          --text: #f4f1e9;
          --muted: #a6adb5;
          --accent: #8ac7ba;
          --accent-strong: #bce8df;
          --accent-text: #101418;
          --border: rgba(244, 241, 233, 0.13);
        }
      }
      * { box-sizing: border-box; }
      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        padding: 1.5rem;
        background: var(--background);
        color: var(--text);
        font: 16px/1.55 system-ui, -apple-system, "Segoe UI", sans-serif;
      }
      .card {
        position: relative;
        width: min(100%, 42rem);
        overflow: hidden;
        padding: clamp(2rem, 7vw, 3.5rem);
        border: 1px solid var(--border);
        border-radius: 1rem;
        background: var(--surface);
        box-shadow: 0 24px 65px rgba(20, 24, 28, 0.08);
      }
      .card::before {
        content: "";
        position: absolute;
        inset: 0 0 auto;
        height: 3px;
        background: linear-gradient(90deg, var(--accent-strong), var(--accent));
      }
      .mark {
        position: absolute;
        top: -5rem;
        right: -0.5rem;
        color: var(--accent);
        opacity: 0.1;
        font: 15rem/1 "Instrument Serif", Georgia, serif;
        pointer-events: none;
      }
      .content { position: relative; }
      .eyebrow {
        margin: 0 0 1.5rem;
        color: var(--accent);
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.17em;
        text-transform: uppercase;
      }
      h1 {
        max-width: 11ch;
        margin: 0;
        font: 400 clamp(2.8rem, 9vw, 4.5rem)/1.02 "Instrument Serif", Georgia, serif;
        letter-spacing: -0.035em;
      }
      .description {
        max-width: 32rem;
        margin: 1.5rem 0 0;
        color: var(--muted);
      }
      .actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
      .actions a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.75rem;
        padding: 0.65rem 1.1rem;
        border: 1px solid var(--border);
        border-radius: 999px;
        color: var(--text);
        background: var(--surface);
        font-weight: 600;
        text-decoration: none;
      }
      .actions .primary { border-color: var(--accent); background: var(--accent); color: var(--accent-text); }
      .actions a:hover { border-color: var(--accent); }
      .actions .primary:hover { background: var(--accent-strong); border-color: var(--accent-strong); }
      .retry { display: inline-block; margin-top: 1.75rem; color: var(--muted); font-size: 0.875rem; text-underline-offset: 0.25rem; }
      a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
    </style>
  </head>
  <body>
    <main class="card">
      <span class="mark" aria-hidden="true">§</span>
      <div class="content">
        <p class="eyebrow">500 / a brief intermission</p>
        <h1>The site hit pause.</h1>
        <p class="description">This page couldn't load right now. While I get it back up, let's connect on LinkedIn or take a look at my work on GitHub.</p>
        <div class="actions">
          <a class="primary" href="${profile.socials.linkedin}" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a>
          <a href="${profile.socials.github}" target="_blank" rel="noopener noreferrer">Explore GitHub ↗</a>
        </div>
        <a class="retry" href="">Try this page again</a>
      </div>
    </main>
  </body>
</html>`;
}
