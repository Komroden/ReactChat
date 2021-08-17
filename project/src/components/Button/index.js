import React from 'react';
import { Button } from "@material-ui/core";
import './style.scss';
export const Buttons = ({ text, func }) => {

    return (
        <Button color="primary" onClick={func}>{text}</Button>

    );
}