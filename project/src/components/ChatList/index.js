import React,{useState}  from 'react';
import { Dialog,DialogTitle,TextField,Button,Link } from '@material-ui/core';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';
import {addChat, removeChat} from "../../store/chats/actions";
import {getChatList} from "../../store/chats/selectors";


export const ChatList = ({ chatId }) => {
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    const chats = useSelector(getChatList,shallowEqual);
    const dispatch = useDispatch();

    const handleClose = () => setVisible(false);
    const handleOpen = () => setVisible(true);
    const handleChange = (e) => setNewChatName(e.target.value);
    const onRemoveChat=()=>{
        dispatch(removeChat("id0"));
    }
    const onAddChat = () => {
        dispatch(addChat(newChatName));
        setNewChatName("");
        handleClose();
    };

    return (
        <>
            <div>
                {Object.keys(chats).map((id, i) => (
                    <div key={i}>
                        <Link to={`/chats/${id}`}>
                            <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                                {chats[id].name}
                            </b>
                        </Link>
                    </div>
                ))}
                <Button onClick={onRemoveChat}>
                    Remove Chat
                </Button>
                <span className="add-chat" onClick={handleOpen}>
          Add Chat
        </span>
            </div>
            <Dialog open={visible} onClose={handleClose}>
                <DialogTitle>Please enter a name for new chat</DialogTitle>
                <TextField value={newChatName} onChange={handleChange} />
                <Button onClick={onAddChat} disabled={!newChatName}>
                    Submit
                </Button>

            </Dialog>
        </>
    );
};


