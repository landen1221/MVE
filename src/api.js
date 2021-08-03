import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

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

  static async login(data, method = "post") {
    const url = `${BASE_URL}/admin/login`;
    console.log(data);
    try {
      const result = await axios({ url, method, data });

      return result;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getAllStories(data, method = "get") {
    const url = `${BASE_URL}/admin/all`;
    console.log("*************");
    console.log(data);
    try {
      const allStories = await axios({ url, method, data });
      return allStories;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async addFlagCount(storyID, method = "post") {
    const url = `${BASE_URL}/story/addflag/${storyID}`;
    try {
      await axios({ url, method });
      return "flag count increased";
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async subtractFlagCount(storyID, method = "post") {
    const url = `${BASE_URL}/story/subtractflag/${storyID}`;
    try {
      await axios({ url, method });
      return "flag count decreased";
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async updateVisability(data, method = "post") {
    const url = `${BASE_URL}/admin/update`;
    try {
      await axios({ url, method, data });
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
}

export default MVEAPI;
