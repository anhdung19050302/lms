<template>
  <h1 class="text-white text-2xl">Home > Course</h1>
  <div class="my-5">
    <table class="w-full text-center bg-white rounded-lg">
      <thead class="border-b-2 border-gray-100 h-16">
        <tr class="font-bold">
          <td class="w-10 px-5">#</td>
          <td class="px-5 w-20">Program Name</td>
          <td class="px-5 w-2/5">Summary</td>
          <td class="px-5">Price</td>
          <td>Upload Image</td>
          <td>Detail Course Video</td>
          <td>Detail Course Docx</td>
          <td>Another Action</td>
        </tr>
      </thead>
      <tbody>
        <tr
          class="h-10 border-t-2 border-gray-100"
          v-for="(course, key) in courses"
          :key="key"
        >
          <td class="py-5">{{ key + 1 }}</td>
          <td class="py-5">{{ course.title }}</td>
          <td class="py-5">{{ course.summary }}</td>
          <td class="py-5">{{ course.credit }}</td>
          <td class="py-5">
            <router-link
              :to="`/admin/course/upload/${course.id}`"
              class="bg-green-500 px-4 py-3 rounded-2xl text-white"
            >
              Upload
            </router-link>
          </td>
          <td>
            <router-link
              :to="`/admin/course/detail/${course.id}`"
              class="bg-blue-500 px-4 py-3 rounded-2xl text-white"
              >Detail</router-link
            >
          </td>
          <td>
            <router-link
              :to="`/admin/course/docx/${course.id}`"
              class="bg-blue-500 px-4 py-3 rounded-2xl text-white"
              >Document</router-link
            >
          </td>
          <td>
            <button
              class="bg-red-500 px-4 py-3 rounded-2xl text-white"
              @click="showActions = showActions === key ? null : key"
            >
              <font-awesome-icon :icon="['fas', 'pen-to-square']" />
            </button>
            <div
              v-if="showActions === key"
              class="absolute bg-white p-2 rounded-md shadow-lg"
            >
              <div
                class="bg-blue-500 px-4 py-3 rounded-2xl text-white w-full mb-2"
              >
                <router-link :to="`/admin/course/update/${course.id}`">
                  Update
                </router-link>
              </div>
              <div class="bg-red-500 px-4 py-3 rounded-2xl text-white w-full">
                <button class="">Delete</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="my-5">
      <router-link
        to="/admin/course/add"
        class="bg-button text-white p-2 rounded-md px-5 py-3"
        >Add Course</router-link
      >
    </div>
  </div>
</template>
<script>
import adminService from "@/services/adminService";
export default {
  data() {
    return {
      showActions: false,
      courses: [],
    };
  },
  methods: {
    async getAllCourses() {
      try {
        const response = await adminService.getAllCourses();
        this.courses = response.data.data;
        console.log(this.courses);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getAllCourses();
  },
};
</script>
