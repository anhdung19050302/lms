<template>
  <div class="w-full t bg-white rounded-lg">
    <div class="">
      <h1 class="text-2xl font-bold">Program Name:{{ courseInfor.title }}</h1>
      <h1 class="text-xl my-4">Summary: {{ courseInfor.summary }}</h1>
      <table class="w-full text-center bg-white rounded-lg">
        <thead class="border-b-2 border-gray-100 h-16 font-bold">
          <tr>
            <td>Title</td>
            <td>Summary</td>
            <td class="w-1/4">Video Name</td>
            <td>UpLoad Video</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          <tr
            class="h-10 border-t-2 border-gray-100"
            v-for="(courseVideo, key) in listCourseVideo"
            :key="key"
          >
            <td>{{ courseVideo.title }}</td>
            <td>{{ courseVideo.summary }}</td>
            <td :class="courseVideo.videoName ? '' : 'text-red-500'">
              {{
                courseVideo.videoName
                  ? courseVideo.videoName
                  : "Require Upload Video"
              }}
            </td>
            <td>
              <router-link
                :to="`/admin/course/video/upload/${courseId}/${courseVideo.id}`"
                class="bg-green-500 px-4 py-3 rounded-2xl text-white"
              >
                UpLoad
              </router-link>
            </td>
            <td>
              <button class="bg-red-500 px-4 py-3 rounded-2xl text-white">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="mt-5">
    <router-link
      :to="`/admin/course/video/add/${courseId}`"
      class="bg-button text-white p-2 rounded-md px-5 py-3"
      >Add Course Video</router-link
    >
  </div>
</template>
<script>
import adminService from "@/services/adminService";
export default {
  data() {
    return {
      courseId: this.$route.params.courseId,
      listCourseVideo: [],
      courseInfor: {},
    };
  },
  methods: {
    async getCourseByCourseId() {
      try {
        const response = await adminService.getCourseById(this.courseId);
        this.courseInfor = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async GetListCourseVideo() {
      try {
        const response = await adminService.getListCourseVideo(this.courseId);
        this.listCourseVideo = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getCourseByCourseId();
    this.GetListCourseVideo();
  },
};
</script>
