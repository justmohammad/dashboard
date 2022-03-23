import React from 'react';
import Overview from "../Overview/Overview";
import HeaderBody from "../HeaderBody/HeaderBody";
import './BodyContent.scss';

const BodyContent = () => {
    return (
        <div className={"body-content"}>
            <div className="body-container">
                <HeaderBody/>
                <Overview/>
            </div>
        </div>
    );
};

export default BodyContent;