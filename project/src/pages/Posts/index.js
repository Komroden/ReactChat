import React, { useEffect, useState } from 'react';
import { Link as RouterLink, Route } from 'react-router-dom';
import { Grid, ListItemText } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import faker from 'faker';
import { Post } from "../Post";


const createPost = () => ({
    id: faker.datatype.uuid(),
    title: faker.lorem.word(),
    description: faker.lorem.words(),
    content: faker.lorem.paragraphs(),
})


export const Posts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const newPosts = Array
            .from({
                length: 2,
            })
            .map(createPost);

        setPosts(newPosts);

    }, []);
    function handleRemove(param) {
        const newPosts = posts.filter((posts) => posts.id !== param);

        setPosts(newPosts);


    }
    function handleAdd(param) {
        const addPosts = posts.concat(param);
        setPosts(addPosts);

    }
    return (
        <Grid container>
            <Grid item md={3}>
                <List>
                    {
                        posts.map(({ title, id }) => <ListItem to={`/posts/${id}`} component={RouterLink}>
                            <ListItemText primary={title} />
                        </ListItem>)
                    }
                </List>
            </Grid>
            <Grid item md={9}>
                <Route path='/posts/:postId'>
                    <Post posts={posts} />
                </Route>
            </Grid>
            <button onClick={() => handleRemove(posts[0].id)}>Remove</button>
            <button onClick={() => handleAdd(posts[1])}>Add</button>
        </Grid>
    );
};