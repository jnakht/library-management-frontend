import Root from "@/layout/Root";
import Books from "@/pages/Books";
import CreateBook from "@/pages/CreateBook";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";


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
            }
        ]
    }
])

export default router;