import Image from "next/image";

export default function SidebarHeader() {
  return (
    <div className="w-[150px] h-[600px] border rounded-md flex flex-col items-center justify-start py-8">
      <Image
        src="/calendar_icon.webp"
        alt="Calendar Icon"
        width={64}
        height={64}
        className="mb-4 transition-transform duration-200 hover:scale-110"
      />
    </div>
  );
}
