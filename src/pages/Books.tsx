import Loading from "@/module/loading/Loading";
import { useGetAllBooksQuery } from "@/redux/features/books/booksApi";
import { useState } from "react";
import TablePagination from '@mui/material/TablePagination';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setPage, setRowsPerPage, setTotalData } from "@/redux/features/books/paginationSlice";


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
    <div>
      {/* : Title, Author, Genre, ISBN, Copies, Availability, and Actions. */}
      <table className="table-auto md:table-fixed">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>ISBN</th>
            <th>Copies</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.data?.map(book =>
              <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.isbn}</td>
                <td>{book.copies}</td>
                <td>{book.availability}</td>
                <td>actions</td>
              </tr>
            )
          }
        </tbody>
      </table>


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