import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {OtherTasksPage} from "./pages/OtherTasksPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (<HomePage/>)
    },
    {
        path: '/otherTasks',
        element: (<OtherTasksPage/>)
    }
]);