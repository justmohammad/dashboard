import React from 'react';
import {Badge} from "react-bootstrap";
import {BsBell, BsSearch} from "react-icons/bs";
import './Header.scss';

const Header = () => {
    return (
        <header className={"header"}>
            <div className={"left-logo"}>
                <i>
                    <img src="./images/Logo.svg" alt="logo"/>
                </i>
            </div>
            <div className={"search"}>
                <div className="input-search">
                    <div className="input-search-background">
                        <div className="icon-input">
                            <BsSearch/>
                        </div>
                        <input type="search" placeholder={"Search e.g card"}/>
                    </div>
                </div>
            </div>
            <div className={"right-logo"}>
                <i>
                    <img src="./images/Logo2.svg" alt="logo"/>
                </i>
                <p>CoinBase</p>
            </div>
            <div className="notifications">
                <i>
                    <BsBell/>
                </i>
                <Badge>25</Badge>
            </div>
        </header>
    );
};

export default Header;