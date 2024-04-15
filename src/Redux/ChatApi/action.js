export const actionType = {
  GET_USERLIST: "GET_USERLIST",
  GET_USERLIST_SUCCESS: "GET_USERLIST_SUCCESS",
  GET_USERLIST_ERROR: "GET_USERLIST_ERROR",
  
  GET_SINGLE_USER: "GET_SINGLE_USER",
  GET_SINGLE_USER_SUCCESS: "GET_SINGLE_USER_SUCCESS",
  GET_SINGLE_USER_ERROR: "GET_SINGLE_USER_ERROR", 
};

export const GetUserList = (payload) => {
  return {
    type: actionType.GET_USERLIST,
    payload,
  };
};

export const GetUserListSuccess = (payload) => {
  return {
    type: actionType.GET_USERLIST_SUCCESS,
    payload,
  };
};

export const GetUserListError = (payload) => {
  return {
    type: actionType.GET_USERLIST_ERROR,
    payload,
  };
};

export const GetSingleUser = (payload) => {
  return {
    type: actionType.GET_SINGLE_USER,
    payload,
  };
};

export const GetSingleUserSuccess = (payload) => {
  return {
    type: actionType.GET_SINGLE_USER_SUCCESS,
    payload,
  };
};

export const GetSingleUserError = (payload) => {
  return {
    type: actionType.GET_SINGLE_USER_ERROR,
    payload,
  };
};
