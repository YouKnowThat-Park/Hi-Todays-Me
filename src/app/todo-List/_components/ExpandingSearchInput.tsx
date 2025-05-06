"use client";
import { todoSearchState } from "@/recoil/todo-List/todoSearchAtom";
import { useState, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

interface Props {
  onToggle?: (open: boolean) => void;
}

export default function ExpandingSearchInput({ onToggle }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const setSearch = useSetRecoilState(todoSearchState);

  const handleToggle = () => {
    const next = !isOpen;
    setIsOpen(next);
    onToggle?.(next);

    // 닫히면 검색어 초기화
    if (!next) setSearch("");
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        onToggle?.(false);
        setSearch(""); // 검색어 초기화
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle, setSearch]);

  return (
    <div
      ref={wrapperRef}
      className={`h-12 transition-all duration-300 flex items-center px-0 ${
        isOpen ? "w-full" : "w-12"
      }`}
    >
      <div
        className={`flex items-center rounded-full transition-all duration-300 overflow-hidden ${
          isOpen ? "w-full border px-3" : "w-12 h-12 justify-center"
        }`}
      >
        <button
          onClick={handleToggle}
          className="flex items-center justify-center w-12 h-12 rounded-full transition hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
          >
            <path
              fill="currentColor"
              d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
            />
          </svg>
        </button>

        {isOpen && (
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="ml-3 outline-none text-sm bg-transparent w-full text-gray-800 placeholder:text-gray-400"
          />
        )}
      </div>
    </div>
  );
}
