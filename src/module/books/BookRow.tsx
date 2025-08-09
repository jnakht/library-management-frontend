


export default function BookRow({ book }) {
    return (
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
            <td className="px-4 py-3 flex gap-2">
                <button className="text-green-500 cursor-pointer hover:underline">Edit</button>
                <button className="text-red-500 cursor-pointer hover:underline">Delete</button>
                <button className="text-purple-500 cursor-pointer hover:underline">Borrow</button>
            </td>
        </tr>
    );
}