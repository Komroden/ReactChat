import React, {useMemo} from 'react';
import {PostList} from "../../components/PostList";
import {useRequestApi} from "../../hooks/useRequestApi";
import {ENDPOINT, ENDPOINTS} from "../../api";




export const Start = (props) => {

    const url = useMemo(() =>[
        ENDPOINT,
        ENDPOINTS.posts
    ].join(''), []);


    const [postApi, getPosts] = useRequestApi({
        url,
        isAutoLoad: true,
    })


    return (
        <div>
            <h1>posts</h1>
            <button onClick={getPosts}>reload</button>

            {
                postApi.isLoading && <div>isLoading: {postApi.isLoading}</div>
            }
            {
                postApi.error && <div>
                    error: {postApi.error.toString()}
                </div>
            }
            {
                postApi.data &&
                <PostList posts={postApi.data}/>
            }
        </div>
    );
};