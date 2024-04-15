import { actionType } from "./action"; // import named export
export const InitialState = {
  AddedMessages: [],
  SearchParameter:'',
};

const messageReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.ADD_MESSAGE:
      return {
        ...state,
        AddedMessages: [...state.AddedMessages, action.payload],
      };
    case actionType.SET_SEARCH_TEXT:
      return {
        ...state,
        SearchParameter: action.payload
      };
    default:
      return state;
  }
};

export default messageReducer;
