<template>
  <div class="">
    <header class="px-5 pt-5 pb-3 text-2xl bg-white font-semibold">
      Content Course
    </header>
    <div class="body-course scrollable">
      <div>
        <div
          class="px-5 py-3 border-b-2 border-gray-300 hover:bg-gray-200"
          @click="handleShowContent(1)"
        >
          <div class="section-1 flex items-center justify-between">
            <h3 class="text-xl font-medium">1. Nội dung 1</h3>

            <span class="" v-show="currentSections.includes(1)"
              ><font-awesome-icon :icon="['fas', 'angle-up']"
            /></span>
            <span class="" v-show="!currentSections.includes(1)"
              ><font-awesome-icon :icon="['fas', 'angle-down']"
            /></span>
          </div>
          <div class="text-xs px-1"><span>5 lessons</span></div>
        </div>
        <div
          class="detail-content-1 bg-white"
          v-show="currentSections.includes(1)"
        >
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            1. lesson 1
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            2. lesson 2
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            3. lesson 3
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            4. lesson 4
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            5. lesson 5
          </div>
        </div>
      </div>
      <div>
        <div
          class="hover:bg-gray-200 px-5 py-3 border-b-2 border-gray-300"
          @click="handleShowContent(2)"
        >
          <div class="section-2 flex items-center justify-between">
            <h3 class="text-xl font-normal">2. Nội dung 2</h3>
            <span class="" v-show="currentSections.includes(2)"
              ><font-awesome-icon :icon="['fas', 'angle-up']"
            /></span>
            <span class="" v-show="!currentSections.includes(2)"
              ><font-awesome-icon :icon="['fas', 'angle-down']"
            /></span>
          </div>
          <div class="text-xs px-1"><span>5 lessons</span></div>
        </div>
        <div
          class="detail-content-2 bg-white"
          v-show="currentSections.includes(2)"
        >
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            1. lesson 1
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            2. lesson 2
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            3. lesson 3
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            4. lesson 4
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            5. lesson 5
          </div>
        </div>
      </div>
      <div class="">
        <div
          class="hover:bg-gray-200 px-5 py-3 border-b-2 border-gray-300"
          @click="handleShowContent(3)"
        >
          <div class="section-3 flex items-center justify-between">
            <h3 class="text-xl font-normal">3. Nội dung 3</h3>
            <span class="" v-show="currentSections.includes(3)"
              ><font-awesome-icon :icon="['fas', 'angle-up']"
            /></span>
            <span class="" v-show="!currentSections.includes(3)"
              ><font-awesome-icon :icon="['fas', 'angle-down']"
            /></span>
          </div>
          <div class="text-xs px-1"><span>5 lessons</span></div>
        </div>
        <div
          class="detail-content-3 bg-white"
          v-show="currentSections.includes(3)"
        >
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            1. lesson 1
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            2. lesson 2
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            3. lesson 3
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            4. lesson 4
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            5. lesson 5
          </div>
        </div>
      </div>
      <div>
        <div
          class="hover:bg-gray-200 px-5 py-3 border-b-2 border-gray-300"
          @click="handleShowContent(4)"
        >
          <div class="section-4 flex items-center justify-between">
            <h3 class="text-xl font-normal">4. Nội dung 4</h3>
            <span class="" v-show="currentSections.includes(4)"
              ><font-awesome-icon :icon="['fas', 'angle-up']"
            /></span>
            <span class="" v-show="!currentSections.includes(4)"
              ><font-awesome-icon :icon="['fas', 'angle-down']"
            /></span>
          </div>
          <div class="text-xs px-1"><span>5 lessons</span></div>
        </div>
        <div
          class="detail-content-4 bg-white"
          v-show="currentSections.includes(4)"
        >
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            1. lesson 1
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            2. lesson 2
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            3. lesson 3
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            4. lesson 4
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            5. lesson 5
          </div>
        </div>
      </div>
      <div class="">
        <div
          class="hover:bg-gray-200 px-5 py-3 border-b-2 border-gray-300"
          @click="handleShowContent(5)"
        >
          <div class="section-5 flex items-center justify-between">
            <h3 class="text-xl font-normal">5. Nội dung 5</h3>
            <span class="" v-show="currentSections.includes(5)"
              ><font-awesome-icon :icon="['fas', 'angle-up']"
            /></span>
            <span class="" v-show="!currentSections.includes(5)"
              ><font-awesome-icon :icon="['fas', 'angle-down']"
            /></span>
          </div>
          <div class="text-xs px-1"><span>5 lessons</span></div>
        </div>
        <div
          class="detail-content-5 bg-white"
          v-show="currentSections.includes(5)"
        >
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            lesson 1
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            lesson 2
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            lesson 3
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            lesson 4
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            lesson 5
          </div>
        </div>
      </div>
      <div class="">
        <div
          class="hover:bg-gray-200 px-5 py-3 border-b-2 border-gray-300"
          @click="handleShowContent(6)"
        >
          <div class="section-3 flex items-center justify-between">
            <h3 class="text-xl font-normal">6. Nội dung 6</h3>
            <span class="" v-show="currentSections.includes(6)"
              ><font-awesome-icon :icon="['fas', 'angle-up']"
            /></span>
            <span class="" v-show="!currentSections.includes(6)"
              ><font-awesome-icon :icon="['fas', 'angle-down']"
            /></span>
          </div>
          <div class="text-xs px-1"><span>5 lessons</span></div>
        </div>
        <div
          class="detail-content-6 bg-white"
          v-show="currentSections.includes(6)"
        >
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            1. lesson 1
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            2. lesson 2
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            3. lesson 3
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            4. lesson 4
          </div>
          <div class="hover:bg-gray-200 px-9 py-3 text-base font-light">
            5. lesson 5
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarCourse",
  data() {
    return {
      currentSections: [],
    };
  },
  methods: {
    handleShowContent(sectionId) {
      const index = this.currentSections.indexOf(sectionId);
      if (index > -1) {
        this.currentSections.splice(index, 1);
      } else {
        this.currentSections.push(sectionId);
      }
      console.log(this.currentSections);
    },
  },
};
</script>
<style scoped>
.scrollable {
  height: 80vh; /* Adjust as needed */
  overflow-y: auto;
}
.active {
  background-color: rgba(240, 81, 35, 0.2);
}
</style>
