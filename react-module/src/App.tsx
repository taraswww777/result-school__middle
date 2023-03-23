import React from 'react';
import {RouterProvider} from "react-router-dom";
import {MantineProvider} from "@mantine/core";
import {router} from "./router";

export const App = () => {


    return (
        <MantineProvider withNormalizeCSS>
            <RouterProvider router={router}/>
        </MantineProvider>
    );
}
