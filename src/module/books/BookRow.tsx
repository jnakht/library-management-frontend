import { useDeleteBookMutation } from "@/redux/features/books/booksApi";
import { Link } from "react-router";
import Swal from 'sweetalert2'


export default function BookRow({ book }) {
    // console.log("this is the book for each row: ", book);

    const [deleteBook, { data, isLoading, error }] = useDeleteBookMutation();
    const handleDeleteBook = async () => {
     const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    })
    if (result.isConfirmed) {
        try {
            const res = await deleteBook(book._id);
            console.log("this is delete response: ", res);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        } catch (error) {
            console.log(error);
        }
    }
    
    }
   
    return (
        <tr key={book._id} className="border-b hover:bg-gray-50">
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
            <td className="px-4 py-3 flex gap-2">
                <Link to={`/books/${book?._id}`}><button className="text-sky-500 cursor-pointer hover:underline">View</button></Link>
                <Link to={`/edit-book/${book?._id}`}><button className="text-green-500 cursor-pointer hover:underline">Edit</button></Link>
                <button onClick={handleDeleteBook} className="text-red-500 cursor-pointer hover:underline">Delete</button>
                <Link to={`/borrow/${book?._id}`}><button className="text-purple-500 cursor-pointer hover:underline">Borrow</button></Link>
            </td>
        </tr>
    );
}