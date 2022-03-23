import React from 'react';
import './Overview.scss';
import {BsCalendar2Check} from "react-icons/bs";
import Cardover from "../Cardover/Cardover";
import ConversionRate from "../ConversionRate/ConversionRate";
import BanerTransaction from "../BanerTransaction/BanerTransaction";
import ListCardOverview from "../ListCardOverview/ListCardOverview";

const Overview = () => {
    return (
        <div className={"overview"}>
            <div className="header-overview">
                <h5>Overview</h5>
                <i>
                    <BsCalendar2Check/>
                </i>
            </div>
            <Cardover/>
            <ConversionRate/>
            <BanerTransaction/>
            <ListCardOverview/>
        </div>
    );
};

export default Overview;