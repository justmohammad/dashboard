import React from 'react';
import './Layout.scss';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
        </div>
    );
};

export default Layout;