import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface ScrollTodoUiProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function ScrollTodoUI({
  isOpen,
  onClose,
  children,
}: ScrollTodoUiProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-[800px] h-[560px] bg-white flex flex-col items-center  rounded-t-lg shadow p-2"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mt-2" />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
