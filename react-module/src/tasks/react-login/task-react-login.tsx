import {Signup} from "../../components/signup";
import React from "react";

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