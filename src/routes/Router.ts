import Root from "@/layout/Root";
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
        ]
    }
])

export default router;