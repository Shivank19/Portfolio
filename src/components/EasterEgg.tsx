import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

const SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

/**
 * Konami code easter egg — redirects to /lab, a hidden page that shows
 * the creative / experimental / hobby side of the portfolio.
 */
export function EasterEgg() {
  const navigate = useNavigate();

  useEffect(() => {
    let buf: string[] = [];
    const onKey = (e: KeyboardEvent) => {
      buf = [...buf, e.key].slice(-SEQUENCE.length);
      if (
        buf.length === SEQUENCE.length &&
        buf.every((k, i) => k.toLowerCase() === SEQUENCE[i].toLowerCase())
      ) {
        buf = [];
        navigate({ to: "/lab" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  return null;
}
