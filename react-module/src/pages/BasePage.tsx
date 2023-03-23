import {Navbar, Menu} from "@mantine/core";
import React from "react";
import {Link} from "react-router-dom";
import {CFC} from "../types";
import S from "./BasePageStyle.module.scss";

const links = [
    {link: '/otherTasks', label: 'OtherTasksPage'},
    {link: '/routerTask', label: 'routerTask'}
];

export const BasePage: CFC = ({children}) => {
    return (
        <div className={S.BasePage}>
            <div className={S.BasePage__nav}>
                <Navbar>
                    <Navbar.Section>
                        <Menu>
                            {links.map(({link, label}) => (
                                <Menu.Item key={link}>
                                    <Link to={link} key={link}>{label}</Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Navbar.Section>
                </Navbar>
            </div>
            <div className={S.BasePage__main}>
                {children}
            </div>
        </div>
    );
}