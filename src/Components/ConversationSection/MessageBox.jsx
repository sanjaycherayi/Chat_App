import React from "react";
import { loggedInUser, ChatHistory } from "../../Constants/ConstData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMessage } from "../../Redux/Chat/action";
function MessageBox() {
  const dispatch = useDispatch();
  const Messages = useSelector((state) => state.messageReducer.AddedMessages);
  const SingleUserData = useSelector(
    (state) => state.ChatApiReducer.SingleUser
  );

  useEffect(() => {
    if (Messages?.length > 0) {
      const lastMessage = Messages[Messages.length - 1];
      if (lastMessage.sender) {
        dispatch(
          addMessage({
            chat_id: SingleUserData.id,
            sender: false,
            text: "Thank you for your message!",
          })
        );
      }
    }
  }, [Messages]);

// Filter Messages based on chat_id
const filteredMessages = Messages.filter(
  (message) => message.chat_id === SingleUserData.id
);
  return (
    <div className="row message" id="conversation">
      {ChatHistory?.map((message, index) => (
        <div
          className={`row message-body ${
            message.sender ? "message-main-sender" : "message-main-receiver"
          }`}
          key={index}
        >
          <div
            className={`col-sm-12 ${
              message.sender ? "message-main-sender" : "message-main-receiver"
            }`}
          >
            <div className={`${message.sender ? "sender" : "receiver"}`}>
              <div className="message-text">{message.text}</div>
            </div>
          </div>
        </div>
      ))}
      {filteredMessages?.map((message, index) => (
        <div
          className={`row message-body ${
            message.sender ? "message-main-sender" : "message-main-receiver"
          }`}
          key={index}
        >
          <div
            className={`col-sm-12 ${
              message.sender ? "message-main-sender" : "message-main-receiver"
            }`}
          >
            <div className={`${message.sender ? "sender" : "receiver"}`}>
              <div className="message-text">{message.text}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageBox;
