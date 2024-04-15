import { actionType } from './action'; // import named export

export const InitialState = {
  UserList: [],
  SingleUser:{},
};

const ChatReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.GET_USERLIST:
      return { ...state, UserList: [] };
    case actionType.GET_USERLIST_SUCCESS:
      return { ...state, UserList: action.payload };
    case actionType.GET_USERLIST_ERROR:
      return { ...state, UserList: "error" };

    case actionType.GET_SINGLE_USER:
      return { ...state, SingleUser: {} };
    case actionType.GET_SINGLE_USER_SUCCESS:
      return { ...state, SingleUser: action.payload };
    case actionType.GET_SINGLE_USER_ERROR:
      return { ...state, SingleUser: "error" };

    default:
      return state;
  }
};

export default ChatReducer;
