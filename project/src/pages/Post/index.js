import React from 'react';
import { useParams, Redirect } from "react-router-dom";
import { MessageList } from "../../components/MessageList"



export const Post = ({ posts }) => {
    const { postId } = useParams();

    const currentPost = posts?.find(({ id }) => id === postId);

    if (!currentPost) {
        return <Redirect to="/posts" />
    }

    return (
        <div>
            <MessageList />
        </div>
    );
};