import { useBorrowSummaryQuery } from "@/redux/features/books/booksApi";

export default function BorrowSummary() {

    const { data, isLoading } = useBorrowSummaryQuery(undefined);
    console.log(data);
  return (
    <div className="max-w-[80%] mx-auto lg:min-h-[50vh] mt-5 md:mt-10">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm text-left text-gray-700">
            <thead className="bg-[#385777] text-white text-xs uppercase ">
                <tr className="">
                    <th className="px-4 py-3 border-b">Book Title</th>
                    <th className="px-4 py-3 border-b">ISBN</th>
                    <th className="px-4 py-3 border-b">Total Quantity Borrowed</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.data?.map( item => 
                        <tr key={item?.book?.isbn} 
                        className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3">{item?.book?.title || 'unknown/book deleted'}</td>
                            <td className="px-4 py-3">{item?.book?.isbn || 'N/A'}</td>
                            <td className="px-4 py-3">{item?.totalQuantity}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
      </div>
    </div>
  );
}