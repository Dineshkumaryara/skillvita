"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Internship } from "../../lib/internships";
import InternshipCard from "./InternshipCard";
import DomainsPills from "./DomainsPills";
import { Button } from "@/components/ui/button";
import { SearchX } from "lucide-react";

interface ListViewProps {
  items: Internship[];
}

export default function ListView({ items }: ListViewProps) {
  const [domain, setDomain] = useState<string | null>(null);
  const [visible, setVisible] = useState(6);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const domains = useMemo(() => {
    return Array.from(new Set(items.map((i) => i.domain)));
  }, [items]);

  const filtered = useMemo(() => {
    if (!domain) return items;
    return items.filter((i) => i.domain === domain);
  }, [items, domain]);

  useEffect(() => {
    setVisible(6);
  }, [domain]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible((v) => Math.min(v + 6, filtered.length));
        }
      });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [filtered.length]);

  const shown = filtered.slice(0, visible);

  return (
    <div aria-labelledby="internship-list-heading" className="space-y-6">
      <div className="flex flex-col gap-4">
        <h2 id="internship-list-heading" className="text-2xl font-bold text-white">Explore Opportunities</h2>
        <div className="mt-6">
          <DomainsPills domains={domains} selected={domain} onSelect={setDomain} />
        </div>
      </div>

      <div className="mt-8 pt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => (
          <InternshipCard key={item.id} item={item} />
        ))}
      </div>

      {/* <div
        ref={sentinelRef}
        className="mt-8 h-6 w-full"
        aria-hidden
      /> */}

      {shown.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center rounded-2xl bg-neutral-900 border border-dashed border-neutral-800">
          <SearchX className="h-12 w-12 text-neutral-600 mb-4" />
          <h3 className="text-lg font-medium text-white">No internships found</h3>
          <p className="text-neutral-500">Try selecting a different domain category.</p>
          <Button
            variant="link"
            onClick={() => setDomain(null)}
            className="mt-2 text-emerald-500 hover:text-emerald-400"
            aria-label="Clear filters"
          >
            Clear filters
          </Button>
        </div>
      )}

      {visible < filtered.length && (
        <div className="mt-6 flex justify-center">
          <Button
            onClick={() => setVisible((v) => Math.min(v + 6, filtered.length))}
            variant="outline"
            className="min-w-[140px] rounded-full border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
            aria-label="Load more internships"
          >
            Load More Internships
          </Button>
        </div>
      )}
    </div>
  );
}
