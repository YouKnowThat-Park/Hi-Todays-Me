import React from "react";
import { FiBell } from "react-icons/fi";

export default function NotificationBell() {
  return (
    <button
      className="
        fixed right-10 bottom-15 
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
      <FiBell size={25} className="text-gray-600" />
    </button>
  );
}
