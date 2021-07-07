import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
console.log(`BASE_URL = ${BASE_URL}`);

class MVEAPI {
  static async requestStories(vaccine, method = "get") {
    const url = `${BASE_URL}/vaccine/${vaccine}`;

    try {
      const stories = await axios({ url, method });
      return stories;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getStats(method = "get") {
    const url = `${BASE_URL}/vaccine`;
    try {
      const stats = await axios({ url, method });
      return stats;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async postStory(data, method = "post") {
    const url = `${BASE_URL}/story`;

    try {
      const addStory = await axios({ url, data, method });
      return addStory;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async searchStories(query, method = "get") {
    const url = `${BASE_URL}/story/search?q=${query}`;

    try {
      const foundStories = await axios({ url, query, method });
      return foundStories;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
}

export default MVEAPI;
