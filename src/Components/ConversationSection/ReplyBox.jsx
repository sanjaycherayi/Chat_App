import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../Redux/Chat/action";

function ReplyBox() {
  const [message, setMessage] = useState("");
  const SingleUserData = useSelector(
    (state) => state.ChatApiReducer.SingleUser
  );

  const dispatch = useDispatch();

  const handleSend = () => {
    dispatch(
      addMessage({
        chat_id: SingleUserData.id,
        sender: true,
        text: message,
      })
    );
    setMessage("")
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };
  return (
    <div className="row reply">
      <div className="col-sm-1 col-xs-1 reply-emojis">
        <i className="fa fa-smile-o fa-2x" />
      </div>
      <div className="col-sm-9 col-xs-9 reply-main">
        <textarea
          className="form-control"
          rows={1}
          id="comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>

      <div className="col-sm-2 col-xs-2 reply-send" onClick={handleSend}>
      {message?.length>0? <i className="fa fa-send fa-2x" aria-hidden="true" />:
        <i className="fa fa-microphone fa-2x" aria-hidden="true" />}
      </div>
    </div>
  );
}

export default ReplyBox;
