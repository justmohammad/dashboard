import React from 'react';
import './Layout.scss';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import BodyContent from "../bodyContent/BodyContent";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <BodyContent/>
        </div>
    );
};

export default Layout;