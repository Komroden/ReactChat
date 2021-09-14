import { CHANGE_NAME } from './actions'
export const initialState = {
    showName: true,
    name: 'Kirill'
}

export const profileReducer = (state = initialState, action) => {
    switch (action?.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        default:
            return state
    }
}