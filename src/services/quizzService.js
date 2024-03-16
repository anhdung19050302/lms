import axios from "axios";

const quizService = {
  async getQuizByCourseId(courseId) {
    const response = await axios.get(
      `/quiz/get-all-by-course-id/student?courseId=${courseId}`
    );
    return response;
  },
  async getAllQuestionInQuiz(quizId) {
    const response = await axios.get(`quiz-question/${quizId}/all`);
    return response;
  },
};

export default quizService;
