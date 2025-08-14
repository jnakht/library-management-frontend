import type { TAuthor } from "@/types";


export default function AuthorCard({author} : { author: TAuthor }) {
  return (
    <div className="h-full w-full">
        {/* h-[380px] w-[292px] */}
      <div className="h-[380px] w-full lg:w-[292px]">
        <img className="w-full h-full" src={author?.headshot} alt="" />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h3 className="text-[#121212] text-[24px] font-playfair-display h-full">{author?.name}</h3>
        <p className="text-[#797979] text-[17px]">Author</p>
      </div>
    </div>
  );
}