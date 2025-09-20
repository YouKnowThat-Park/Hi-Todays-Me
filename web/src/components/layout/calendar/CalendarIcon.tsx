"use client";
import { calendarModal } from "@/state/modal/ModalAtom";
import React from "react";
import { FiCalendar } from "react-icons/fi";
import { useRecoilState } from "recoil";

export default function CalendarIcon() {
  const [, setModal] = useRecoilState(calendarModal);

  const openCalendar = () => {
    setModal({ isOpen: true, selectedDate: null });
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
