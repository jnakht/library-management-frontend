import type { TFictionBook } from "@/types";


export default function BookCard({book} : { book : TFictionBook} ) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-max cursor-pointer">
        {/* card image */}
      <div className="h-[282px] w-[185px]">
            <img className="w-full h-full" src={book?.image} alt="" />
      </div>
      {/* lower section of card */}
      <div className="flex flex-col space-y-2 text-center items-center h-full">
            <h3 className="text-[#121212] font-playfair-display text-[24px]">{book?.title}</h3>
            <p className="text-brand-primary text-[16px]">{book?.author}</p>
            <p className="text-[18px] font-playfair-display text-[#121212]">{book?.publisher}</p>
            <h4 className="text-brand-primary font-font-lora text-[19px] font-semibold">{book?.price_range}</h4>
      </div>
    </div>
  );
}