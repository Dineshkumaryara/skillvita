"use client";

import dynamic from "next/dynamic";
import type { Internship } from "@/lib/internships";

const ListView = dynamic(() => import("./ListView"), {
  ssr: false,
  loading: () => (
    <section className="bg-black " aria-live="polite">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-80 rounded-2xl bg-neutral-900 animate-pulse border border-neutral-800" />
          ))}
        </div>
      </div>
    </section>
  ),
});

export default function ListViewClient({ items }: { items: Internship[] }) {
  return <ListView items={items} />;
}
