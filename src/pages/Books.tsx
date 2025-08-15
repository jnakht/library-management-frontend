import Loading from "@/module/loading/Loading";
import { useGetAllBooksQuery } from "@/redux/features/books/booksApi";
import { useState } from "react";
import TablePagination from '@mui/material/TablePagination';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setPage, setRowsPerPage, setTotalData } from "@/redux/features/books/paginationSlice";
import { cn } from "@/lib/utils";
import BookRow from "@/module/books/BookRow";


export default function Books() {

  const { page, pageCount, rowsPerPage, totalData} = useAppSelector((state) => state.pagination);
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
  const { data, error, isLoading } = useGetAllBooksQuery(prop, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });


  if (data) {
    dispatch(setTotalData(data?.total))
  }

  // console.log({ data });
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="max-w-[80%] mx-auto min-h-[50vh] mt-5 md:mt-10">
      {/* : Title, Author, Genre, ISBN, Copies, Availability, and Actions. */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm text-left text-gray-700">
        <thead className="bg-[#385777] text-white uppercase text-xs sticky top-0">
          <tr>
            <th className="px-4 py-3 border-b">Title</th>
            <th className="px-4 py-3 border-b">Author</th>
            <th className="px-4 py-3 border-b">Genre</th>
            <th className="px-4 py-3 border-b">ISBN</th>
            <th className="px-4 py-3 border-b">Copies</th>
            <th className="px-4 py-3 border-b">Availability</th>
            <th className="px-4 py-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.data?.map(book =>
              <BookRow book={book}/>
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