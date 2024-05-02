import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            
        ]
    }
])

export default router;