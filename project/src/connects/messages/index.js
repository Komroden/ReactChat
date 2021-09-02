import {connect} from "react-redux";
import {messagesSelectors, createAddMessage} from "../../store/messages";


const mapStateToProps = (state, {chatId}) => ({
  messages: messagesSelectors.getMessage(state, chatId),
})

const mapDispatchToProps = (dispatch) => ({
  addMessages: (message) => dispatch(createAddMessage(message)),
})

export const messagesConnect = connect(mapStateToProps, mapDispatchToProps);