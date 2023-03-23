import React from "react";
import {Link} from "react-router-dom";
export const HomePage = ()=>{
    return (
        <div>
            <ul>
                <li><Link to={'/otherTasks'}>OtherTasksPage</Link></li>
            </ul>
        </div>
    )
}