import React from 'react';
import { string, number } from 'prop-types';
export function ChatItem(props) {
    return (
        <div>
            {props.chats.map(({ id, name }) => (
                <div key={id}>{id}-{name}</div>

            ))}
        </div>)
}
ChatItem.propTypes = { id: number, name: string }