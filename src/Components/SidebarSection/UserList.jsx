import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleUser, GetUserList } from "../../Redux/ChatApi/action";
import { convertTo24Hour, filterUsingName } from "../../Utils/helper";
function UserList() {
  const dispatch = useDispatch();
  const UserListData = useSelector((state) => state.ChatApiReducer.UserList);
  const SearchParmeter = useSelector(
    (state) => state.messageReducer.SearchParameter
  );
  const SingleUserData = useSelector(
    (state) => state.ChatApiReducer.SingleUser
  );
  useEffect(() => {
    dispatch(GetUserList());
    dispatch(
      GetSingleUser({
        id: "1",
      })
    );
  }, []);

  const handleUserClick = (id) => {
    dispatch(
      GetSingleUser({
        id,
      })
    );
  };

  return (
    <div className="row sideBar">
      {filterUsingName(UserListData, SearchParmeter)?.map((data, index) => (
        <div
          className={`row sideBar-body ${data.id === SingleUserData.id ? 'active' : ''}`}
          key={index}
          onClick={() => handleUserClick(data.id)}
        >
          <div className="col-sm-3 col-xs-3 sideBar-avatar">
            <div className="avatar-icon">
              <img src={data.profile_pic} />
            </div>
          </div>
          <div className="col-sm-9 col-xs-9 sideBar-main">
            <div className="row">
              <div className="col-sm-8 col-xs-8 sideBar-name">
                <span className="name-meta">{data.name}</span>
                {data.last_message && (
                  <div className="last-message">{data.last_message}</div>
                )}
              </div>
              {data.last_message_time && (
                <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                  <span className="time-meta pull-right">
                    {convertTo24Hour(data.last_message_time)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
