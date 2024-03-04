<template>
  <h1 class="text-white mb-5 text-3xl">Home > Profile</h1>
  <div class="flex">
    <div
      class="text-center bg-white m-1 p-3 border-yellow-100 border-2 rounded-2xl"
    >
      <div class="border-b-2 border-gray-300 rounded-2x">
        <img :src="userProfile.picture" alt="" class="rounded-2xl w-80" />
        <p class="mt-3">
          {{ userProfile.firstName }}{{ userProfile.lastName }}
        </p>
        <p class="mb-3">Role: {{ userRoles.role_name }}</p>
      </div>
      <div class="py-4">
        <router-link to="/"
          ><font-awesome-icon :icon="['fas', 'user-pen']" />
          Account-Settings</router-link
        ><br />
        <router-link to="/"
          ><font-awesome-icon :icon="['fas', 'lock']" /> Chagne
          Password</router-link
        >
      </div>
    </div>
    <div
      class="bg-white m-1 border-yellow-100 border-2 rounded-2xl p-10 w-full"
    >
      <div class="border-b-2 border-gray-200 py-3">
        <h2><font-awesome-icon :icon="['fas', 'user']" /> Personal Info</h2>
        <p>First Name: {{ userProfile.firstName }}</p>
        <p>Last Name: {{ userProfile.lastName }}</p>
      </div>
      <div class="border-b-2 border-gray-200 py-3">
        <h3><font-awesome-icon :icon="['fas', 'phone']" /> Contact Info</h3>
        <p>Email: {{ userProfile.email }}</p>
        <p>
          Tel No.: {{ userProfile.phone ? userProfile.phone : "No contact" }}
        </p>
        <p>
          Address/city:
          {{ userProfile.address ? userProfile.address : "No contact" }}
        </p>
      </div>
      <div class="py-3">
        <h3>
          <font-awesome-icon :icon="['fas', 'calendar-days']" /> Important Dates
        </h3>

        <p>Last login: {{ formatDate(userProfile.lastLogin) }}</p>
        <p>Registered Date: {{ formatDate(userProfile.dateJoined) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import userService from "@/services/userService";

export default {
  name: "ProfileComponent",
  data() {
    return {
      userProfile: {},
      userRoles: {},
    };
  },
  methods: {
    async getUserProfile() {
      try {
        const userEmail = localStorage.getItem("user");
        const response = await userService.getUserProfile(userEmail);
        this.userProfile = response.data.data;
        console.log(this.userProfile);
        this.userRoles = response.data.data.roles[0];
      } catch (error) {
        console.log(error);
      }
    },
    formatDate(dateString) {
      var date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const minutes = date.getMinutes();
      const hours = date.getHours();
      const seconds = date.getSeconds();
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    },
  },

  mounted() {
    this.getUserProfile();
  },
};
</script>
