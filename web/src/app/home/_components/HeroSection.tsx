import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full h-[500px] flex flex-wrap gap-y-5 lg:gap-y-0">
        <Link href={"/todo"}>
          <div className="w-full lg:w-1/3 bg-green-500 hover:scale-102 transform transition-transform duration-300">
            이용하기 및 로그인 이동, 사진
          </div>
        </Link>
        <Link
          href={"/plan/premium"}
          className="w-full  lg:w-1/3 bg-amber-300 hover:scale-102 transform transition-transform duration-300"
        >
          <div>기능 및 멤버쉽 이동, 사진</div>
        </Link>
        <Link
          href={"/plan/business-team"}
          className="w-full  lg:w-1/3 bg-gray-300 hover:scale-102 transform transition-transform duration-300"
        >
          <div>협업, 사진</div>
        </Link>
      </div>
    </div>
  );
}
