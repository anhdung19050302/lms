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
  async UploadThumbnail(courseId, data) {
    const response = await axos.patch(
      `/course/${courseId}/update-thumbnail/admin`,
      data
    );
    return response;
  },
  async getCourseById(courseId) {
    const response = await axos.get(`/course/${courseId}`);
    return response;
  },
  async updateCourse(courseId, data) {
    const response = await axos.patch(`/course/${courseId}`, data);
    return response;
  },
  async courseVideoByCourseId(data) {
    const response = await axos.post("/course-video", data);
    return response;
  },
  async getListCourseVideo(courseId) {
    const response = await axos.get(
      `/course-video/get-videos-by-course-id?courseId=${courseId}`
    );
    return response;
  },
  async UpLoadCourseVideo(videoId, data) {
    const response = await axos.patch(
      `/course-video/upload-video-file?videoId=${videoId}`,
      data
    );
    return response;
  },
  async createCoureVideo(data) {
    const response = await axos.post("/course-video", data);
    return response;
  },

  async getListCourseDocs(courseId) {
    const response = await axos.get(
      `/course-docs/get-docs-by-course-id?courseId=${courseId}`
    );
    return response;
  },
  async createCourseDocs(data) {
    const response = await axos.post("/course-docs", data);
    return response;
  },
  async upLoadCourseDocs(courseDocsId, data) {
    const response = await axos.patch(
      `/course-docs/update-document-file?courseDocsId=${courseDocsId}`,
      data
    );
    return response;
  },
  async getListQuiz(courseId) {
    const response = await axos.get(
      `/quiz/get-quizs-by-course-id?courseId=${courseId}`
    );
    return response;
  },
  async createNewQuiz(data) {
    const response = await axos.post("/quiz/new", data);
    return response;
  },
};
export default adminService;
