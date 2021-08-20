import React from 'react';
import { Button } from "@material-ui/core";
import './style.scss';
import { string, func } from 'prop-types';
export const Buttons = ({ text, func }) => {

    return (
        <Button color="primary" onClick={func}>{text}</Button>

    );
}
Buttons.propTypes = { text: string, func: func }