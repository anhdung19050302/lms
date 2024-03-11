<template>
  <h2 class="text-2xl text-white">Home > Account Settings</h2>
  <form @submit.prevent="handlerSubmitGetCourse">
    <div class="mt-4 flex">
      <div class="w-1/2 bg-white">
        <div class="text-center py-4 bg-gradient-to-r from-indigo-500">
          Add Course
        </div>
        <div class="px-5 py-5">
          <div class="mt-5">
            <h2>Title</h2>
            <input
              type="text"
              class="rounded-full w-full"
              v-model="title"
              required
            />
          </div>
          <div class="mt-5">
            <h2>Price</h2>
            <input
              required
              type="number"
              class="rounded-full w-full"
              v-model="credit"
            />
          </div>
          <div class="mt-5">
            <h2>Email</h2>
            <input
              type="text"
              class="rounded-full w-full"
              v-model="email"
              required
              readonly
            />
          </div>
          <div class="mt-5">
            <h2>Summary</h2>
            <input
              type="text"
              class="rounded-full w-full"
              v-model="summary"
              required
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 text-red-500 text-xl" v-if="error">{{ error }}</div>
    <div class="mt-4">
      <button class="p-4 bg-button rounded-2xl text-white">
        Update Course
      </button>
    </div>
  </form>
</template>

<script>
import adminService from "@/services/adminService";
export default {
  data() {
    return {
      courseId: this.$route.params.courseId,
      title: "",
      credit: "",
      email: "",
      summary: "",
      levelId: "",
      error: "",
    };
  },
  methods: {
    async getCourseById() {
      try {
        const response = await adminService.getCourseById(this.courseId);
        this.title = response.data.data.title;
        this.credit = response.data.data.credit;
        this.email = response.data.data.email;
        this.summary = response.data.data.summary;
        this.levelId = response.data.data.levelId;
      } catch (error) {
        console.log(error);
      }
    },
    async handlerSubmitGetCourse() {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await adminService.updateCourse(this.courseId, {
          title: this.title,
          credit: parseInt(this.credit),
          summary: this.summary,
          phone: this.phone,
        });
        this.$router.push("/admin/courses");
        this.$toast.open({
          message: "Course updated successfully",
          type: "success",
        });
      } catch (error) {
        this.error = error.message;
        console.log(error);
      }
    },
  },
  mounted: function () {
    this.getCourseById();
  },
};
</script>
