import type { ISectionHeader } from "@/types";


export default function SectionHeader({title, description}: ISectionHeader) {
  return (
    <div className="w-full mt-[120px] mb-[80px] flex flex-col justify-center items-center text-center">
      <h3 className="text-[#121212] text-[55px] font-playfair-display">{title}</h3>
      <p className="text-[24px] mt-4 max-w-[80%]">{description}</p>
    </div>
  );
}