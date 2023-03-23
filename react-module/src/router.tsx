import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {OtherTasksPage} from "./pages/OtherTasksPage";
import {RouterTaskPage} from "./pages/RouterTaskPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (<HomePage/>)
    },
    {
        path: '/otherTasks',
        element: (<OtherTasksPage/>)
    },
    {
        path: '/routerTask',
        element: (<RouterTaskPage/>)
    }
]);