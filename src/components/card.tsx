import Link from "next/link";
import React from "react";

export default function Card({
  cardTitle,
  cardContent,
  cardStats,
  cardIcon,
  cardLink,
}: {
  cardTitle: string;
  cardContent: string;
  cardStats: string;
  cardIcon: React.ReactNode;
  cardLink: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-xl bg-[#1d184e] p-6 text-white">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">{cardTitle}</h3>
          <p className="text-sm text-gray-300">{cardContent}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
          {cardIcon}
        </div>
      </div>
      <div className="flex justify-between items-end pt-3">
        <div className="text-2xl font-bold">{cardStats}</div>
        <Link href="#" className="text-sm text-gray-300">
          {cardLink}
        </Link>
      </div>
    </div>
  );
}
