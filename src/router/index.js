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
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
    meta: {
      layout: "auth",
    },
  },
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
  {
    path: "/reset-password",
    name: "ResetPassword  ",
    component: () => import("@/components/User/ResetPassword.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/account-settings",
    name: "AccountSettings",
    component: () => import("@/components/User/AccountSettings.vue"),
    meta: {
      layout: "admin",
    },
  },

  {
    path: "/course/:slug",
    name: "CourseDetail",
    component: () => import("@/components/CourseDetail/CourseDetail.vue"),
    meta: {
      layout: "",
    },
  },

  {
    path: "/learning/:slug",
    name: "LearningCourse",
    component: () => import("@/views/LearningCourse.vue"),
    meta: {
      layout: "",
    },
  },
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
