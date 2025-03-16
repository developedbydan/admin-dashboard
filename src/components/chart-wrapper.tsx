"use client";

import dynamic from "next/dynamic";

const LazyChart = dynamic(
  () => import("@/components/chart").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <p>Loading chart...</p>,
  }
);

export default function ChartWrapper() {
  return <LazyChart />;
}
