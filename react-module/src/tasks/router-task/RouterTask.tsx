import React, {FC} from "react";
import S from './RouterTask.module.scss'
import {createBrowserRouter, createRoutesFromElements, Link, Route} from "react-router-dom";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="dashboard" element={<Dashboard />} />
        </Route>
    )
);
export const RouterTask: FC = () => {
    return (
        <div className={S.RouterTask}>
            <nav className={S.RouterTask__nav}>
                <ul>
                    <li><Link to={'routerTask'}>Главная</Link></li>
                    <li><Link to={'routerTask/categories'}>Категории</Link></li>
                </ul>
            </nav>
            <main>

            </main>
        </div>
    )
}