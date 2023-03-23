import React, {FC} from "react";
import {BasePage} from "./BasePage";
import {RouterTask} from "../tasks/router-task/RouterTask";

export const RouterTaskPage: FC = () => (
    <BasePage>
        <RouterTask/>
    </BasePage>
);