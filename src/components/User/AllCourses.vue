<template>
  <h1 class="text-white text-2xl">Home > Course</h1>
  <div class="my-5">
    <table class="w-full text-center bg-white rounded-lg">
      <thead class="border-b-2 border-gray-100 h-16">
        <tr class="font-bold">
          <td>#</td>
          <td>Program Name</td>
          <td>Summary</td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr class="h-10 border-t-2 border-gray-100">
          <td>1</td>
          <td>001</td>
          <td>Test</td>
          <td>
            <button class="bg-green-500 px-4 py-3 rounded-2xl text-white">
              Upload
            </button>
          </td>
          <td>
            <button
              class="bg-red-500 px-4 py-3 rounded-2xl text-white"
              @click="showActions = !showActions"
            >
              <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
            </button>
            <div
              v-if="showActions"
              class="absolute bg-white p-2 rounded-md shadow-lg"
            >
              <button
                class="bg-blue-500 px-4 py-3 rounded-2xl text-white w-full mb-2"
              >
                Update
              </button>
              <button
                class="bg-red-500 px-4 py-3 rounded-2xl text-white w-full"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
        <tr class="h-10 border-t-2 border-gray-100">
          <td>1</td>
          <td>001</td>
          <td>Test</td>
          <td>
            <button class="bg-green-500 px-4 py-3 rounded-2xl text-white">
              Upload
            </button>
          </td>
          <td>
            <button class="bg-red-500 px-4 py-3 rounded-2xl text-white">
              <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
            </button>
          </td>
        </tr>
        <tr class="h-10 border-t-2 border-gray-100">
          <td>1</td>
          <td>001</td>
          <td>Test</td>
          <td>
            <button class="bg-green-500 px-4 py-3 rounded-2xl text-white">
              Upload
            </button>
          </td>
          <td>
            <button class="bg-red-500 px-4 py-3 rounded-2xl text-white">
              <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="my-5">
      <router-link
        to="/courses/add"
        class="bg-button text-white p-2 rounded-md px-5 py-3"
        >Add Course</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showActions: false,
    };
  },
};
</script>
