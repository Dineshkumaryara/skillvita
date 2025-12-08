// components/ScrollToTopButton.tsx
"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-3 right-3 md:bottom-6 md:right-6 p-2 md:p-3 rounded-full bg-white/[0.9] dark:bg-black/[0.9] border-[0.8] border-black/[0.2] dark:border-white/[0.2] hover:bg-black/[0.1] dark:hover:bg-white/[0.1] transition z-50"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} className="text-black dark:text-white"/>
    </button>
  );
}
