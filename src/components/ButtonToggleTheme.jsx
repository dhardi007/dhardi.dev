import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ButtonToggleTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      onClick={toggle}
      className="rounded-md p-1.5 transition-all hover:opacity-70"
      style={{ color: "var(--text-muted)" }}
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
