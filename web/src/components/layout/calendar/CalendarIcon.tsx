"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FiCalendar } from "react-icons/fi";

export default function CalendarIcon() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const openCalendar = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("modal", "calendar");
    router.push(`?${params.toString()}`);
  };
  return (
    <button
      onClick={openCalendar}
      className="
            fixed right-26 bottom-15
            w-14 h-14 
            flex items-center justify-center
            rounded-full 
            border border-gray-300 
            bg-white 
            shadow-md 
            hover:shadow-lg 
            hover:bg-gray-50 
            transition
          "
    >
      <FiCalendar size={25} className="text-gray-600" />
    </button>
  );
}
