import React from 'react';
import DropdownButton from "../DropdownButton/DropdownButton";
import './ListCardOverview.scss';

const ListCardOverview = () => {
    return (
        <div className={"listCardOverview"}>
            <div className="header-list-card">
                <h5>Cards</h5>
                <DropdownButton/>
            </div>
            <div className="body-list-card">
                <div className="single-list-card">
                    <img src="./images/Rectangle 333.svg" alt=""/>
                </div>
                <div className="single-list-card">
                    <img src="./images/Rectangle 334.svg" alt=""/>
                </div>
                <div className="single-list-card">
                    <img src="./images/Rectangle 337.svg" alt=""/>
                </div>
                <div className="single-list-card">
                    <img src="./images/Rectangle 336.svg" alt=""/>
                </div>
                <div className="single-list-card">
                    <img src="./images/Rectangle 337.svg" alt=""/>
                </div>
                <div className="single-list-card">
                    <img src="./images/Group 25.svg" alt=""/>
                </div>
            </div>
            <button className={"button-more-list-card"}>
                <a href="">View More</a>
            </button>
        </div>
    );
};

export default ListCardOverview;