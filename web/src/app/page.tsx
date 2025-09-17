import React from "react";
import HomePage from "./home/HomePage";

export const metadata = {
  title: "Hi, Today's Me",
  description:
    "하투미는 하루 일과를 기록하고 계획할 수 있는 투두리스트 기반 플랫폼입니다. 일기 작성은 물론, 팀 단위 협업도 지원하며, 귀여운 이모티콘으로 일정을 아기자기하게 꾸밀 수 있습니다.",
};

export default function page() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #A7E7E4, #86C5E7, #A7E7E4)",
      }}
    >
      <HomePage />
    </div>
  );
}
