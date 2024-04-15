export const actionType = {
    ADD_MESSAGE : 'ADD_MESSAGE',
    SET_SEARCH_TEXT : 'SET_SEARCH_TEXT'

  };
  
  export const addMessage = (payload) => ({
    type: actionType.ADD_MESSAGE,
    payload
  });

  export const setSearchText = (payload) => ({
    type: actionType.SET_SEARCH_TEXT,
    payload
  });