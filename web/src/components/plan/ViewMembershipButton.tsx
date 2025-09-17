import Link from "next/link";
import React from "react";

export interface ViewMembershipButtonProps {
  label: string;
  width?: string;
  height?: string;
  text?: string;
}

export default function ViewMembershipButton({
  width,
  height,
  label,
  text,
}: ViewMembershipButtonProps) {
  return (
    <div>
      <Link
        href={"/plan"}
        className={`${width} ${height} text-white ${text} font-bold flex justify-center items-center rounded-2xl`}
        style={{
          backgroundImage:
            "linear-gradient(to right top, #A7E7E4, #86C5E7, #A7E7E4)",
        }}
      >
        {label}
      </Link>
    </div>
  );
}
