import {ADD_CHAT, REMOVE_CHAT} from "./actions";

const initialState = {
    chatList: [],
};
const filterById = (targetId) => ({id}) => targetId !== id;

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.name,
                    },
                ],
            };
        case REMOVE_CHAT:
            return{
                chatList: state.chatList.filter(filterById(action.id))
            }
        default:
            return state;
    }
};

