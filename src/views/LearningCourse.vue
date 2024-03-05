<template>
  <div class="flex h-full">
    <div class="content-component w-4/5 bg-white">
      <content-display />
    </div>
    <div class="side-course-component bg-gray-100 w-1/5 cursor-pointer">
      <side-bar-course />
    </div>
  </div>
</template>

<script>
import SideBarCourse from "@/components/CourseDetail/SideBarCourse.vue";
import ContentDisplay from "@/components/CourseDetail/ContentDisplay.vue";

export default {
  components: {
    SideBarCourse,
    ContentDisplay,
  },
};
</script>
