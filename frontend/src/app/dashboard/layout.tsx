"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { getToken } from "@/lib/auth";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!getToken()) {
      redirect("/login");
      return;
    }

    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return <>{children}</>;
}
