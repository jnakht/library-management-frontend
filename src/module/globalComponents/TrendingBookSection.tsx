import { getFictionBooks } from "@/redux/features/books/fictionSlice";
import { useAppSelector } from "@/redux/hooks";
import SectionHeader from "../globalComponents/SectionHeader";
import BookCard from "../globalComponents/BookCard";


export default function TrendingBookSection() {

    const fictions = useAppSelector(getFictionBooks);
    const trendingBooks = fictions?.slice(6, 12);
    // console.log("THis is fictions: ", fictions);
  return (
    <div className="max-w-[80%] mx-auto">
      <SectionHeader 
        title="Trending Books"
        description="Dive into our trending collection, where timeless classics meet today’s most talked-about titles."
      ></SectionHeader>
    {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 space-y-7">
            {
                trendingBooks?.map(book => 
                    <BookCard book={book}></BookCard>
                )
            }
      </div>
      <div className="w-full  mx-auto flex flex-col justify-center items-center mt-10">
        <button className="btn text-[#FFF] text-[15px] font-nunito-sans bg-[#385777] hover:bg-[#385790] font-medium uppercase rounded-full h-[50px] md:h-[60px] w-[160px] md:w-[190px] cursor-pointer">VIEW MORE BOOKS</button>
      </div>
    </div>
  );
}