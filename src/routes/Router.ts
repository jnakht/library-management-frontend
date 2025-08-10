import Root from "@/layout/Root";
import Books from "@/pages/Books";
import CreateBook from "@/module/books/CreateBookForm";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";
import EditBook from "@/pages/EditBook";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/books',
                Component: Books,
            },
            {
                path: '/create-book',
                Component: CreateBook,
            },
            {
                path: '/edit-book/:id',
                Component: EditBook,
            }
        ]
    }
])

export default router;