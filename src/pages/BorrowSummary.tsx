import { useBorrowSummaryQuery } from "@/redux/features/books/booksApi";

export default function BorrowSummary() {

    const { data, isLoading } = useBorrowSummaryQuery(undefined);
    console.log(data);
  return (
    <div>
      <h3>This is BorrowSummary component</h3>
    </div>
  );
}