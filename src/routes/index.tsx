import App from "@/App";
import HomePage from "@/pages/Home/HomePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
{
    Component:App,
    path:"/",
    children:[
        {
            Component:HomePage,
            index:true
        }
    ]
}
])