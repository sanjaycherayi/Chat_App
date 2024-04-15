import ApiClient from "./ApiClient";

class ChatService {
  constructor(callback) {
    this.callback = callback;
  }

  async GetAllUserList(payload) {
    const response = await ApiClient.get(`Chat/ChatUserList`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  }

  async GetSingleUser(payload) {
    const response = await ApiClient.get(`Chat/ChatUserList/${payload.id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  }
}

export default new ChatService();
