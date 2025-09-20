"use client";

import { useEffect, useCallback } from "react";

interface UseCloseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function useCloseModal({ isOpen, onClose }: UseCloseModalProps) {
  // 뒤로가기 핸들링
  useEffect(() => {
    const handlePopState = () => onClose();

    if (isOpen) {
      window.history.pushState({ modal: true }, "");
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isOpen, onClose]);

  // 닫기 함수 (window.history.back까지 포함)
  const closeModal = useCallback(() => {
    onClose();
    if (isOpen) {
      window.history.back();
    }
  }, [isOpen, onClose]);

  return closeModal;
}
