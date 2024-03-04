<template>
  <div class="header mx-auto px-4 sm:px-6 lg:px-8">
    <div class="logo flex flex-col sm:flex-row items-center">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="LMS" class="logo_img" />
      </router-link>
    </div>
    <div class="navigation flex flex-col sm:flex-row items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/course">Course</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="auth flex flex-col sm:flex-row items-center">
      <div v-if="!isLogin">
        <router-link to="/login" class="login">Login</router-link>
        <router-link to="/register" class="register">Get started</router-link>
      </div>
      <div class="" v-else-if="userProfile">
        <button
          id="dropdownInformationButton"
          data-dropdown-toggle="dropdownInformation"
          class="rounded-full px-3 py-3 text-center inline-flex items-center w-24"
          type="button"
        >
          <img :src="userProfile.picture" alt="" class="rounded-full" />
        </button>

        <!-- Dropdown menu -->
        <div
          id="dropdownInformation"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{{ userProfile.firstName }} {{ userProfile.lastName }}</div>
            <div class="font-medium truncate">{{ userProfile.email }}</div>
          </div>
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformationButton"
          >
            <li v-if="userRole !== 'ADMIN'">
              <router-link
                to="/profile"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Profile</router-link
              >
            </li>
            <li v-if="userRole === 'ADMIN'">
              <router-link
                to="/admin"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Admin Dashboard</router-link
              >
            </li>
            <li v-if="userRole !== 'ADMIN'">
              <router-link
                to="/course"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Course</router-link
              >
            </li>
          </ul>
          <div class="py-2">
            <button
              @click="logout"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from "@/services/userService";
export default {
  name: "HeaderComponent",
  data() {
    return {
      isLogin: false,
      userProfile: {},
      userRole: "",
    };
  },

  methods: {
    checkLogin() {
      if (localStorage.getItem("token")) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    async getUserProfile() {
      try {
        var user = localStorage.getItem("user");
        const response = await userService.getUserProfile(user);
        this.userProfile = response.data.data;
        this.userRole = localStorage.getItem("userRole");
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
      this.userProfile = {};
      this.$router.push("/login");
    },
  },
  mounted() {
    if (this.isLogin) {
      this.getUserProfile();
    }
  },

  created() {
    this.checkLogin();
  },
};
</script>

<style lang="css" scoped>
.header {
  color: white;
}
.logo {
  margin-top: 16px;
  display: flex;
}
.logo_img {
  width: 200px;
}
.header {
  display: flex;
  justify-content: center;
  margin: 0 40px;
}
.navigation {
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 60px;
}

.navigation > * {
  margin-right: 20px;
}

.navigation > *:last-child {
  margin-right: 0;
}
.auth {
  display: flex;
  justify-content: space-around;
  align-items: center; /* Add this line */
}
.login {
  padding: 10px 30px;
  border: 2px solid #f1f1f1;
  border-radius: 20px;
  margin-right: 30px;
}
.register {
  padding: 10px 30px;
  background-color: #7f56d9;
  border-radius: 20px;
}
</style>
