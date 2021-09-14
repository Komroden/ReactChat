export const ADD_MESSAGE = 'ADD_MESSAGE';


export const createAddMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message
})
export const addBotMessage = (message)=>(dispatch)=> {
  setTimeout(()=>dispatch(createAddMessage(message)),2000)
  }

