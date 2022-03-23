import React from 'react';
import './Cardover.scss';
import DropdownButton from "../DropdownButton/DropdownButton";

const Cardover = () => {
    return (
        <div className="cards-over">
            <div className="card-overview">
                <DropdownButton/>
                <div className="body-card">
                    <div className="image-card">
                        <img src="./images/Group 257.svg" alt=""/>
                    </div>
                    <div className="content-card">
                        <div className="title-card">
                            <h5>Total Number Of Users</h5>
                        </div>
                        <div className="number-card">
                            <p>21.44%</p>
                        </div>
                        <div className="chart-card">
                            <img src="./images/Base.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-overview">
                <DropdownButton/>
                <div className="body-card">
                    <div className="image-card">
                        <img src="./images/Group 258.svg" alt=""/>
                    </div>
                    <div className="content-card">
                        <div className="title-card">
                            <h5>Total Number Of Agents</h5>
                        </div>
                        <div className="number-card">
                            <p>21.44%</p>
                        </div>
                        <div className="chart-card">
                            <img src="./images/Base.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-overview">
                <DropdownButton/>
                <div className="body-card">
                    <div className="image-card">
                        <img src="./images/Group 259.svg" alt=""/>
                    </div>
                    <div className="content-card">
                        <div className="title-card">
                            <h5>Total Number
                                Of Transactions</h5>
                        </div>
                        <div className="number-card">
                            <p>21.44%</p>
                        </div>
                        <div className="chart-card">
                            <img src="./images/Base.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cardover;