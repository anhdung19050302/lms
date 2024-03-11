import axios from "axios";

const courseService = {
  async getCourseBySlug(slug) {
    const response = await axios.get(`/course/slug/${slug}`);
    return response;
  },
  async studentGetCourseVideos(courseId) {
    const response = await axios.get(
      `/course-video/get-videos-by-course-id/student?courseId=${courseId}`
    );
    return response;
  },
  async checkoutCourse(courseId) {
    const response = await axios.post(`/payment/checkout?courseId=${courseId}`);
    return response;
  },
  async getCourseByUSerId(userId) {
    const responese = await axios.get(`/course/user/${userId}`);
    return responese;
  },
  async getCourseById(courseId) {
    const response = await axios.get(`/course/${courseId}`);
    return response;
  },
  async studentGetContentVideo(courseId, videoId) {
    const response = await axios.get(
      `/course-video/get-video-url/student?courseId=${courseId}&videoId=${videoId}`
    );
    return response;
  },
};

export default courseService;
