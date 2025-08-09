import Loading from "@/module/loading/Loading";
import { useGetAllBooksQuery } from "@/redux/features/books/booksApi";
import { useState } from "react";
import TablePagination from '@mui/material/TablePagination';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setPage, setRowsPerPage, setTotalData } from "@/redux/features/books/paginationSlice";
import { cn } from "@/lib/utils";


export default function Books() {


  // redux 
  const { page, pageCount, rowsPerPage, totalData} = useAppSelector((state) => state.pagination);
  // console.log("pagination: ");
  const dispatch = useAppDispatch();


  //old style
  // const [page, setPage] = useState(0);
  // const [pageCount, setPageCount] = useState(1);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [totalData, setTotalData] = useState(100);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // setRowsPerPage(parseInt(event.target.value, 10));
    // setPage(0);

    //redux
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    // setPage(newPage);

    // redux 
    dispatch(setPage(newPage));
  };

  const prop = {
      page: page + 1,
      limit: rowsPerPage,
  }
  const { data, error, isLoading } = useGetAllBooksQuery(prop, {
    // pollingInterval: 3000,
    // refetchOnFocus: true,
    // refetchOnMountOrArgChange: true,
    // refetchOnReconnect: true,
  });


  if (data) {
    // setTotalData(data?.total);
    dispatch(setTotalData(data?.total))
  }

  console.log({ data });
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="max-w-[80%] mx-auto">
      {/* : Title, Author, Genre, ISBN, Copies, Availability, and Actions. */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs sticky top-0">
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
              <tr key={book.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{book.title}</td>
                <td className="px-4 py-3">{book.author}</td>
                <td className="px-4 py-3">{book.genre}</td>
                <td className="px-4 py-3">{book.isbn}</td>
                <td className="px-4 py-3">{book.copies}</td>
                <td className="px-4 py-3">{
                  book?.available ? <div className="flex items-center gap-2">
                  <div className="rounded-full size-3 bg-green-500"></div> <span>available</span>
                  </div> :
                  <div className="flex items-center gap-2">
                  <div className="rounded-full size-3 bg-red-500"></div> <span>unavailable</span>
                  </div>
                  }</td>
                <td className="px-4 py-3">actions</td>
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