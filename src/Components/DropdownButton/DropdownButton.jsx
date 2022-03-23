import React from 'react';
import {Dropdown} from "react-bootstrap";
import './DropdownButton.scss';

const DropdownButton = () => {
    return (
        <div className="header-card">
            <Dropdown className={"dropdown-card"}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    ...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default DropdownButton;