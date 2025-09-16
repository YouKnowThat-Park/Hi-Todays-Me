import React from "react";
import ViewMembershipForm from "../_components/ViewMembershipForm";

export default function page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex flex-col justify-center items-center mb-20">
      <div className="flex w-full mt-28 gap-8 justify-center items-center">
        <span className="w-[400px] h-[500px] bg-amber-50 rounded-3xl text-center">
          프리미엄 멤버십 5,900원
        </span>
        <span className="w-[500px] h-[500px] bg-amber-200">
          여긴 사진? 영상?
        </span>
      </div>

      <div className="flex flex-col w-full  gap-8 p-[112px] justify-center items-center">
        <section className="w-full h-[500px] mt-[120px] bg-gray-300">
          여긴 AI가 일정을 추천
        </section>

        <section className="w-full h-[500px] mt-[120px] bg-gray-300">
          여긴 AI가 책을 추천
        </section>

        <section className="w-full h-[500px] mt-[120px] bg-gray-300">
          여긴 더 많은 이모티콘
        </section>

        <section className="w-full h-[500px] mt-[120px] bg-gray-300"></section>
      </div>

      <ViewMembershipForm />
    </div>
  );
}
