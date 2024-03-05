import axos from "axios";

const adminService = {
  async getAlllecturer() {
    const response = await axos.get("user/get-all-records?role=lecturer");
    return response;
  },
  async getAllStudent() {
    const response = await axos.get("user/get-all-records?role=student");
    return response;
  },
  async updateUser(email, data) {
    const response = await axos.patch(`/user/update-profiles/${email}`, data);
    return response;
  },
  async createNewLecturer(data) {
    const response = await axos.post("/user/new?role=lecturer", data);
    return response;
  },
  async createNewStudent(data) {
    const response = await axos.post("/user/new?role=student", data);
    return response;
  },
  async deleteLecturer(email) {
    const response = await axos.delete(`/user/${email}/remove`);
    return response;
  },
  async getAllCourses() {
    const response = await axos.get("/course");
    return response;
  },
  async CreateNewCourse(data) {
    const response = await axos.post("/course/admin", data);
    return response;
  },
};
export default adminService;
