import React from "react";
import ViewMembershipForm from "./_components/ViewMembershipForm";

export default function page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex flex-col justify-center items-center">
      <div className="flex w-full">
        <span className="lg:w-1/3">일반 멤버십 무료</span>
        <span className="lg:w-1/3">프리미엄 멤버십 5,900원</span>
        <span className="lg:w-1/3">기업형 팀 멤버십 99,000원</span>
      </div>
      <ViewMembershipForm />
    </div>
  );
}
