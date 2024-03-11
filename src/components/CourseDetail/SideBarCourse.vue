<template>
  <div class="flex bg-white">
    <div class="content-component w-4/5 bg-white">
      <content-display :listcourse-video="listcourseVideo" />
    </div>
    <div class="side-course-component bg-gray-100 w-1/5 cursor-pointer">
      <header class="px-5 pt-5 pb-3 text-2xl bg-white font-semibold">
        Content Course
      </header>
      <div class="body-course scrollable">
        <div v-for="(courseVideo, index) in listcourseVideo" :key="index">
          <div class="px-5 py-3 border-b-2 border-gray-300 hover:bg-gray-200">
            <a :href="`/learning/${couseId}/${courseVideo.id}`">
              <div class="section-1 flex items-center justify-between">
                <div class="text-xl font-medium">
                  {{ index + 1 }}. {{ courseVideo.title }}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentDisplay from "./ContentDisplay.vue";
import courseService from "@/services/courseService";
export default {
  name: "SideBarCourse",

  components: {
    ContentDisplay,
  },
  data() {
    return {
      listcourseVideo: [],
      couseId: this.$route.params.courseId,
      conntentSummary: "",
    };
  },
  methods: {
    async getListCourseVideo() {
      try {
        const response = await courseService.studentGetCourseVideos(
          this.couseId
        );
        this.listcourseVideo = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    handleProps(data) {
      this.conntentSummary = data;
    },
  },
  mounted() {
    this.getListCourseVideo();
  },
};
</script>
<style scoped>
.scrollable {
  height: 100vh; /* Adjust as needed */
  overflow-y: auto;
}
.active {
  background-color: rgba(240, 81, 35, 0.2);
}
</style>
