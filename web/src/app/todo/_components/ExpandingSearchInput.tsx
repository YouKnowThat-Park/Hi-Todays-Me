"use client";
import { todoSearchState } from "@/state/todo-List/todoSearchAtom";
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
      className={`h-10 flex items-center rounded-full shadow transition-all duration-200 overflow-hidden bg-blue-500 text-white ${
        isOpen ? "w-[220px] pl-3 pr-2" : "w-10 justify-center"
      }`}
    >
      <button
        onClick={handleToggle}
        className="w-10 h-10 flex items-center justify-center hover:text-gray-200 transition"
      >
        {/* 돋보기 아이콘 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
        </svg>
      </button>

      {isOpen && (
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="ml-2 bg-transparent outline-none w-full text-sm placeholder:text-white text-white"
        />
      )}
    </div>
  );
}
