import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import("@/views/HomeView.vue") /* webpackChunkName: "home" */,
    meta: {
      layout: "",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    meta: {
      layout: "auth",
    },
  },

  ///Admin Routes
  {
    path: "/admin",
    name: "AdminView  ",
    component: () => import("@/views/AdminView.vue"),
    redirect: "/admin/profile",
    meta: {
      layout: "admin",
      requiresAdmin: true,
    },
  },
  {
    path: "/admin/profile",
    name: "ProfileView  ",
    component: () => import("@/components/User/ProfileComponent.vue"),
    meta: {
      layout: "admin",
      requiresAdmin: true,
    },
  },
  {
    path: "/admin/lecturers",
    name: "LecturersView  ",
    component: () => import("@/components/User/LecturersComponent.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/lecturers/add",
    name: "AddNewLecturer  ",
    component: () => import("@/components/User/CreateLecturer.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/lecturer/update/:email",
    name: "UpdateLecturer  ",
    component: () => import("@/components/User/UpdateLecturer.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/students",
    name: "StudentsView  ",
    component: () => import("@/components/User/StudentsComponent.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/students/add",
    name: "addNewStudent  ",
    component: () => import("@/components/User/CreateStudent.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/student/update/:email",
    name: "UpdateStudent  ",
    component: () => import("@/components/User/UpdateStudent.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/courses",
    name: "CoursesView  ",
    component: () => import("@/components/User/AllCourses.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/course/add",
    name: "AddNewCourseByAdmin  ",
    component: () => import("@/components/Admin/AddCourseAdmin.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/course/update/:courseId",
    name: "AdminUPdateCourse  ",
    component: () => import("@/components/Admin/UpdateCourse.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/course/upload/:courseId",
    name: "AdminUpdateThumbnail",
    component: () => import("@/components/User/UploadThumbnail.vue"),
    meta: {
      layout: "admin",
    },
  },

  {
    path: "/admin/course/detail/:courseId",
    name: "DetailCourseByAdmin",
    component: () => import("@/components/User/DetailCourse.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/course/video/add/:courseId",
    name: "AddCourseVideoByAdmin",
    component: () => import("@/components/CourseDetail/AddCourseVideo.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/course/video/upload/:courseId/:videoId",
    name: "UploadVideoByAdmin",
    component: () => import("@/components/Admin/UploadVideo.vue"),
    meta: {
      layout: "admin",
    },
  },

  {
    path: "/admin/course/docs/add/:courseId",
    name: "AddCourseDocsByAdmin",
    component: () => import("@/components/CourseDetail/AddCourseDocs.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/course/docs/upload/:courseId/:courseDocsId",
    name: "UploadDocsByAdmin",
    component: () => import("@/components/Admin/UploadDocs.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/course/quiz/add/:courseId",
    name: "AddQuizByAdmin",
    component: () => import("@/components/CourseDetail/AddCourseQuiz.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/complete-exam",
    name: "CompleteExam  ",
    component: () => import("@/components/Exams/CompleteExam.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/quiz",
    name: "Quiz  ",
    component: () => import("@/components/Exams/QuizComponent.vue"),
    meta: {
      layout: "admin",
    },
  },

  //Admin Course Document
  {
    path: "/admin/course/docx/:courseId",
    name: "CourseDcoument",
    component: () => import("@/components/CourseDoc/CourseDoc.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/course/docx/add/:courseId",
    name: "CourseDocumentAdd",
    component: () => import("@/components/CourseDoc/CourseDocAdd.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/admin/course/docx/upload/:courseId/:courseDocId",
    name: "CourseDocumentUpLoad",
    component: () => import("@/components/CourseDoc/CourseDocUpload.vue"),
    meta: {
      layout: "admin",
    },
  },

  ///End Admin Routes

  //// User Routes
  {
    path: "/course/:slug",
    name: "CourseDetail",
    component: () => import("@/components/CourseDetail/CourseDetail.vue"),
    meta: {
      layout: "",
    },
  },

  {
    path: "/learning/:courseId/:videoId",
    name: "LearningCourse",
    component: () => import("@/views/LearningCourse.vue"),
    meta: {
      layout: "",
    },
  },
  {
    path: "/user/profile",
    name: "UserProfile",
    component: () => import("@/components/User/UserProfile.vue"),
    meta: {
      layout: "",
    },
  },
  {
    path: "/user/courses",
    name: "UserCourse",
    component: () => import("@/views/UserCourse.vue"),
    meta: {
      layout: "",
    },
  },

  {
    path: "/register-student",
    name: "StudentRegister",
    component: () => import("@/components/User/StudentRegister.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/register-lecturer",
    name: "LecturerRegister",
    component: () => import("@/components/User/LecturerRegister.vue"),
    meta: {
      layout: "auth",
    },
  },

  //// End User Profile

  /// 404 not found
  {
    path: "/404",
    component: () => import("@/components/GlobalComponent/NotFound.vue"),
    meta: {
      layout: "",
    },
  },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);
  if (!isAuthenticated && requiresAuth) {
    next("/login");
  } else {
    if (requiresAdmin && userRole !== "ADMIN") {
      next("/404");
    } else {
      next();
    }
  }
});
router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }
});
export default router;
