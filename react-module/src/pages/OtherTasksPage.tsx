import React from "react";
import {TaskReactLogin} from "../tasks/react-login";
import {BasePage} from "./BasePage";

export const OtherTasksPage = () => {
    return (
        <BasePage>
            <div>
                <h1>OtherTasksPage page</h1>

                <div>
                    <TaskReactLogin/>
                </div>
            </div>
        </BasePage>
    )
}