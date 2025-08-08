import Root from "@/layout/Root";
import Books from "@/pages/Books";
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
            }
        ]
    }
])

export default router;