import React from 'react';
import './Sidebar.scss';
import {
    BsArrowLeftCircle,
    BsBarChart, BsChatLeftText,
    BsCreditCard,
    BsCurrencyBitcoin,
    BsDiagram3,
    BsEye, BsGear,
    BsPerson,
    BsPersonCheck,
    BsWallet2
} from "react-icons/bs";

const Sidebar = () => {
    return (
        <div className={"sidebar"}>
            <nav className={"menu"}>
                <button>
                    <a href="">
                        <i>
                            <BsEye/>
                        </i>
                        Overview
                    </a>
                </button>
                <button>
                    <a href="">
                        <i>
                            <BsPerson/>
                        </i>
                        Users
                    </a>
                </button>
                <button>
                    <a href="">
                        <i>
                            <BsPersonCheck/>
                        </i>
                        Agents
                    </a>
                </button>
                <button>
                    <a href="">
                        <i>
                            <BsCreditCard/>
                        </i>
                        Cards
                    </a>
                </button>
                <button>
                    <a href="">
                        <i>
                            <BsCurrencyBitcoin/>
                        </i>
                        Bitcoin & Ethereum
                    </a>
                </button>
                <button>
                    <a href="">
                        <i>
                            <BsWallet2/>
                        </i>
                        Payments
                    </a>
                </button>
                <button>
                    <a href="">
                        <i>
                             <BsDiagram3/>
                        </i>
                        Transactions
                    </a>
                </button>
                <button>
                    <a href="">
                        <i>
                            <BsBarChart/>
                        </i>
                        Statistics
                    </a>
                </button>
                <button>
                    <a href="">
                        <i>
                            <BsChatLeftText/>
                        </i>
                        Trade</a>
                </button>
                <button>
                    <a href="">
                        <i>
                            <BsGear/>
                        </i>
                        Settings
                    </a>
                </button>
                <button>
                    <a href="">
                        <i>
                            <BsArrowLeftCircle/>
                        </i>
                        Logout</a>
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;