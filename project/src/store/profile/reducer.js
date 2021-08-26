import { TOGGLE_SHOWNAME } from './actions'
const initialState = {
    showName: false,
    name: 'Kirill'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SHOWNAME: {
            return {
                ...state,
                showName: !state.showName
            }
        }
        default:
            return state
    }
}