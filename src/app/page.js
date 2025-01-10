"use client";

import dynamic from "next/dynamic";

const HomeContent = dynamic(() => import("./Home"), {
  ssr: false,
});

export default function Home() {
  return <HomeContent />;
}
