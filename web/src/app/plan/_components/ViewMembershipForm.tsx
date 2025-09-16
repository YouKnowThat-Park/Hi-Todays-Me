import ViewMembershipButton from "@/components/plan/ViewMembershipButton";
import React from "react";

export default function ViewMembershipForm() {
  return (
    <div>
      <ViewMembershipButton
        width="w-[300px]"
        height="h-[70px]"
        label="멤버십 비교하기"
        text="text-2xl"
      />
    </div>
  );
}
