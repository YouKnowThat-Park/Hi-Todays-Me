"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function CalendarModal() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const isOpen = searchParams.get("modal") === "calendar";

  if (!isOpen) return null;

  const handleClose = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("modal");
    router.push(`?${params.toString()}`);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center bg-black/50"
    >
      <div className="bg-white w-[800px] h-[500px]">
        <div></div>
        <button
          onClick={handleClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
