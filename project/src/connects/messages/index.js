import {connect} from "react-redux";
import {messagesSelectors, createAddMessage,addBotMessage} from "../../store/messages";


const mapStateToProps = (state, {chatId}) => ({
  messages: messagesSelectors.getMessage(state, chatId),
})


const mapDispatchToProps = (dispatch) => ({
  addMessages: (message) => dispatch(createAddMessage(message)),
botMessages:(message) => dispatch(addBotMessage(message))
})



export const messagesConnect = connect(mapStateToProps, mapDispatchToProps);