"use client";

import ScrollTodoUI from "@/components/todo/ScrollTodoUI";
import { calendarModal } from "@/state/modal/ModalAtom";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function CalendarModal() {
  const [modal, setModal] = useRecoilState(calendarModal);

  const handleClose = () => {
    setModal({ isOpen: false, selectedDate: null });
    window.history.back(); // 뒤로가기 처리
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // 뒤로가기 핸들링
  useEffect(() => {
    const handlePopState = () => {
      setModal({ isOpen: false, selectedDate: null });
    };

    if (modal.isOpen) {
      window.history.pushState({ modal: true }, "");
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [modal.isOpen, setModal]);

  if (!modal.isOpen) return null;

  return (
    <ScrollTodoUI isOpen={modal.isOpen} onClose={handleClose}>
      <div
        onClick={handleOverlayClick}
        className="w-full h-full flex flex-col p-6"
      >
        <button
          onClick={handleClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded self-end"
        >
          닫기
        </button>
      </div>
    </ScrollTodoUI>
  );
}
