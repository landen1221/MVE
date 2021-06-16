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
}

export default MVEAPI;
