import PlanMembershipCard from "@/components/plan/PlanMembershipCard";
import React from "react";

export default function BusinessMembershipCardForm() {
  return (
    <div>
      <PlanMembershipCard
        title="프리미엄 멤버십"
        values={{
          price: "4,900원",
          freeFeatures: "일정 관리, 목표 관리, 일기 작성",
          paidFeatures: "AI 추천, 광고 제거, 하투미 전용 이모티콘",
          businessTeam: "지원 안함",
          supportedDevices: "컴퓨터, 스마트폰, 태블릿",
        }}
      />
    </div>
  );
}
