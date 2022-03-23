import React from 'react';
import './ConversionRate.scss';
import DropdownButton from "../DropdownButton/DropdownButton";
import {Table} from "react-bootstrap";
import {BsArrowRight} from "react-icons/bs";

const ConversionRate = () => {
    return (
        <div className={"conversion-rate"}>
            <div className="title-conversion">
                <h5>Conversion Rate to Naira</h5>
                <DropdownButton/>
            </div>
            <div className="body-conversion">
                <div>
                    <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>iTunes Card</th>
                            <th></th>
                            <th>Amazon Card</th>
                            <th></th>
                            <th>Bitcoin</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>USA Physical</td>
                            <td>N400.00</td>
                            <td>USA Physical</td>
                            <td>N400.00</td>
                            <td>Bitcoin BTC</td>
                            <td>N400.00</td>
                        </tr>
                        <tr>
                            <td>USA E-Code card</td>
                            <td>N400.00</td>
                            <td>USA E-Code card</td>
                            <td>N400.00</td>
                            <td>Bitcoin BTC</td>
                            <td>N400.00</td>
                        </tr>
                        <tr>
                            <td>UK Physical Card</td>
                            <td>N400.00</td>
                            <td>UK Physical Card</td>
                            <td>N400.00</td>
                            <td>Bitcoin BTC</td>
                            <td>N400.00</td>
                        </tr>
                        <tr>
                            <td>UK E-Code Card</td>
                            <td>N400.00</td>
                            <td>UK E-Code Card</td>
                            <td>N400.00</td>
                            <td>Bitcoin BTC</td>
                            <td>N400.00</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <button>
                    <a href="">
                        <i>
                            <BsArrowRight/>
                        </i>
                    </a>
                </button>
            </div>
        </div>
    );
};

export default ConversionRate;