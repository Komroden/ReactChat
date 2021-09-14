import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApplicationsList} from "../../components/ApplicationsList";
import {ENDPOINT, ENDPOINTS} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {applicationsSelectors, getApplicationsAction} from "../../store/applications";


export const Applications = (props) => {
    const {postId} = useParams();

    const comments = useSelector(applicationsSelectors.getApplicationsData)
    const error = useSelector(applicationsSelectors.getApplicationsError)
    const isLoading = useSelector(applicationsSelectors.getApplicationsLoading)
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getApplicationsAction(postId));
    }, [])



    return (
        <div>
            <h1>comments</h1>
            postId: {postId}

            {
                isLoading && <div>
                    isLoading: {isLoading.toString()}
                </div>
            }

            {
                error && <div>
                    error: {error.toString()}
                </div>
            }
            {
                comments &&
                <ApplicationsList comments={comments}/>
            }
        </div>
    );
};