import React from 'react';
import {ApplicationsItem} from "../ApplicationsItem";



export const ApplicationsList = ({comments}) => {
    return (
        <div>
            {comments.map((comment) => <ApplicationsItem key={comment.id} {...comment}/>)}
        </div>
    );
};