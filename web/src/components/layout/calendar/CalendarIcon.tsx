import React from "react";
import { FiCalendar } from "react-icons/fi";

export default function CalendarIcon() {
  return (
    <button
      className="
            fixed right-26 bottom-5
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
