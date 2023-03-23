import React, {FC} from "react";
import S from './RouterTask.module.scss'
import {Link} from "react-router-dom";

export const RouterTask: FC = () => {
    return (
        <div className={S.RouterTask}>
            <nav className={S.RouterTask__nav}>
                <ul>
                    <li><Link to={'routerTask'}>Главная</Link></li>
                    <li><Link to={'routerTask/categories'}>Категории</Link></li>
                </ul>
            </nav>

        </div>
    )
}