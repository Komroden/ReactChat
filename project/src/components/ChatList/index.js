import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {chatsConnect} from "../../connects/chats";


export const ChatListRender = ({chats, removeChat}) => {
    return (
        <div>
            {
                chats.map(({title, id}) => <Link to={`/cards/${id}`} key={id}>
                    <div>{title}</div>
                    <button onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        removeChat(id)
                    }}>x</button>
                </Link>)
            }
        </div>
    );
};

ChatListRender.propTypes = {
    chats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
    })),
    removeChat: propTypes.func,
}

export const ChatList = chatsConnect(ChatListRender)