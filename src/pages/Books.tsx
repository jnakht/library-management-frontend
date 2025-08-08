import Loading from "@/module/loading/Loading";
import { useGetAllBooksQuery } from "@/redux/features/books/booksApi";


export default function Books() {

    const { data, error, isLoading } = useGetAllBooksQuery(undefined, {
        pollingInterval: 3000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    });
    console.log({data});
    if (isLoading) {
        return <Loading/>
    }

  return (
    <div>
      <h3>This is Books component</h3>
    </div>
  );
}