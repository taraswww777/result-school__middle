import React from "react";
import {Signup} from "./components/signup";

export const TaskReactLogin = () => {
    const onLogin = () => {
        console.log('onSubmit')
    }

    return (
        <div>
            <Signup onSubmit={onLogin}/>
        </div>
    )
}