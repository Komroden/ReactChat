import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {CommentList} from "../../components/CommentList";
import {useDispatch, useSelector} from "react-redux";
import {commentsSelectors, getCommentsAction} from "../../store/comments";


export const Comments = (props) => {
    const {postId} = useParams();
    const comments = useSelector(commentsSelectors.getCommentsData)
  const error = useSelector(commentsSelectors.getCommentsError)
  const isLoading = useSelector(commentsSelectors.getCommentsLoading)
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getCommentsAction(postId));
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
                <CommentList comments={comments} />
            }
        </div>
    );
};