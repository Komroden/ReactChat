export const ADD_MESSAGE = 'ADD_MESSAGE';



export const createAddMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message
})