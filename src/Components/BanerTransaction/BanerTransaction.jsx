import React from 'react';
import './BanerTransaction.scss';

const BanerTransaction = () => {
    return (
        <div className={"baner-transaction"}>
            <div className="body-baner">
                <div className="title-baner">
                    <h5>Transactions</h5>
                </div>
                <div className="text-baner">
                    Hi welcome, this page is the general overview section of the admin panel which
                    you could edit and modify the view of the page to ya’ preferred taste.
                </div>
                <button>
                    <a href={""}>Learn More</a>
                </button>
            </div>
            <img src="./images/Group 352.svg" alt=""/>
        </div>
    );
};

export default BanerTransaction;