import React from 'react';
export function ChatItem(props) {
    return (
        <div>
            {props.chats.map(({ id, name }) => (
                <div key={id}>{id}-{name}</div>

            ))}
        </div>)
}