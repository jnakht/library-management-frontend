import Loading from "@/module/loading/Loading";
import { useBorrowSummaryQuery } from "@/redux/features/books/booksApi";
import { setPage, setRowsPerPage, setTotalData } from "@/redux/features/borrows/borrowPaginationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import TablePagination from "@mui/material/TablePagination";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function BorrowSummary() {

    const { page, pageCount, rowsPerPage, totalData } = useAppSelector((state) => state.borrowPagination);
    const dispatch = useAppDispatch();

    const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    //redux
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    dispatch(setPage(newPage));
  };

  const prop = {
      page: page + 1,
      limit: rowsPerPage,
  }

    const { data, isLoading, error, isError } = useBorrowSummaryQuery(prop, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  useEffect( () => {
    if (isError) {
      toast.error("Error Occurred!");
    }
  },[isError])

  if (data) {
    dispatch(setTotalData(data?.total))
  }

    // console.log(data);
    if (isLoading) {
     return <Loading></Loading>
    }
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


      <TablePagination
        component="div"
        count={totalData}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}