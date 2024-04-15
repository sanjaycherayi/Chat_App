import React from "react";
import { useSelector } from "react-redux";

function ConversationHeader() {
  const SingleUserData = useSelector(
    (state) => state.ChatApiReducer.SingleUser
  );

  return (
    <div className="row heading">
      <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
        <div className="heading-avatar-icon">
          <img src={SingleUserData.profile_pic} />
        </div>
      </div>
      <div className="col-sm-8 col-xs-7 heading-name">
        <a className="heading-name-meta">{SingleUserData.name}</a>
        <span className="heading-online">{SingleUserData.about}</span>
      </div>
      <div className="col-sm-1 col-xs-1  heading-dot pull-right">
        <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true" />
      </div>
    </div>
  );
}

export default ConversationHeader;
