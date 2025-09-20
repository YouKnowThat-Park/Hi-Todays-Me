"use client";

import ScrollTodoUI from "@/components/todo/ScrollTodoUI";
import { useCloseModal } from "@/hooks/useCloseModal";
import { calendarModal } from "@/state/modal/ModalAtom";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function CalendarModal() {
  const [modal, setModal] = useRecoilState(calendarModal);

  const handleClose = () => {
    setModal({ isOpen: false, selectedDate: null });
  };

  const closeModal = useCloseModal({
    isOpen: modal.isOpen,
    onClose: handleClose,
  });

  return (
    <ScrollTodoUI isOpen={modal.isOpen} onClose={closeModal}>
      <div className="w-full h-full flex flex-col p-6">
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
