import SectionHeader from "../globalComponents/SectionHeader";
import { authors } from "@/assets/authors/authors";
import AuthorCard from "./AuthorCard";


export default function AuthorsSection() {
  return (
    <div className="max-w-[80%] mx-auto">
      <SectionHeader 
        title="Best Of Authors"
        description="We exist to honor authors and their works, placing them at the foundation of our vision, our actions, and our impact on the world of literature."
      ></SectionHeader>
    {/* cards */}
      <div className="flex">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 lg:gap-[6%] 2xl:gap-[8%] space-y-4 lg:space-y-0  mx-auto">
                {
                authors?.map(author => 
                    <AuthorCard author={author}></AuthorCard>
                )
                }
            </div>
      </div>
      <div className="w-full  mx-auto flex flex-col justify-center items-center mt-10">
        <button className="btn text-[#FFF] text-[15px] font-nunito-sans bg-[#385777] hover:bg-[#385790] font-medium uppercase rounded-full h-[50px] md:h-[60px] w-[160px] md:w-[190px] cursor-pointer">VIEW MORE</button>
      </div>
    </div>
  );
}