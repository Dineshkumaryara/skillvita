"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Preloader from "@/components/ui/PreLoader";

export default function AppLoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [pathname]);

  if (loading) return <Preloader />;
  return <>{children}</>;
}
