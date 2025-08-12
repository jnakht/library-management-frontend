import { getFictionBooks } from "@/redux/features/books/fictionSlice";
import { useAppSelector } from "@/redux/hooks";
import SectionHeader from "../globalComponents/SectionHeader";
import BookCard from "../globalComponents/BookCard";


export default function FictionBooks() {

    const fictions = useAppSelector(getFictionBooks);
    console.log("THis is fictions: ", fictions);
  return (
    <div className="max-w-[80%] mx-auto">
      <SectionHeader 
        title="Books You Need"
        description=" Explore our handpicked collection of timeless reads and modern favorites,
        carefully curated to inspire, educate, and entertain."
      ></SectionHeader>
    {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 space-y-7">
            {
                fictions?.map(book => 
                    <BookCard book={book}></BookCard>
                )
            }
      </div>
    </div>
  );
}