import React from "react";

type MembershipValues = {
  price: string;
  freeFeatures: string;
  paidFeatures: string;
  businessTeam: string;
  supportedDevices: string;
};

interface PlanMembershipCardProps {
  title: string;
  values: MembershipValues;
}

export default function PlanMembershipCard({
  title,
  values,
}: PlanMembershipCardProps) {
  const sections = [
    { title: "월 요금", value: values.price },
    { title: "무료 기능", value: values.freeFeatures },
    { title: "유료 기능", value: values.paidFeatures },
    { title: "Business Team", value: values.businessTeam },
    { title: "지원 디바이스", value: values.supportedDevices },
  ];

  return (
    <div className="justify-center items-center">
      <div className="w-[400px] h-[500px] rounded-3xl text-center border border-gray-400 overflow-hidden shadow-2xl">
        {/* 헤더 */}
        <div
          className="bg-blue-200 w-full h-12 flex justify-center items-center rounded-t-3xl font-semibold text-white"
          style={{
            backgroundImage:
              "linear-gradient(to right top, #A7E7E4, #86C5E7, #A7E7E4)",
          }}
        >
          {title}
        </div>

        {/* 내용 */}
        <div className="flex flex-col justify-center items-center gap-6 px-4 mt-4">
          {sections.map((item, idx) => (
            <div key={idx} className="w-full">
              <p className="text-left text-sm text-gray-500 font-medium">
                {item.title}
              </p>
              <p className="text-center text-base mt-2 text-gray-700 font-semibold">
                {item.value}
              </p>
              {idx !== sections.length - 1 && <div className="border-b mt-2" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
