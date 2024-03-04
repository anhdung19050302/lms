import axios from "axios";

const userService = {
  async getUserProfile(user_email) {
    const response = await axios.get(`user/${user_email}`);
    return response;
  },
};
export default userService;
