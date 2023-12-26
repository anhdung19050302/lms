<template>
  <header
    class="container mx-auto flex items-center justify-between border-b py-2.5 px-10"
  >
    <div class="logo flex items-center">
      <router-link to="/">
        <img
          src="../../assets/images/logo_1.jpg"
          alt="Logo"
          class="size-12 rounded-lg"
        />
      </router-link>
      <h2 class="ml-3 mr-3 font-semibold">Easy to study</h2>
    </div>
    <div class="search">
      <input
        type="text"
        placeholder="Tìm kiếm"
        class="border-2 border-gray-300 rounded-full px-2 py-1 w-[380px]"
      />
    </div>

    <div class="btn-auth flex space-x-4">
      <button class="" @click="showLogin">Đăng nhập</button>
      <button
        class="bg-orange-500 w-24 rounded-full h-10 text-white hover:bg-orange-600"
      >
        Đăng ký
      </button>
    </div>
  </header>
  <login-component />
</template>

<script>
import { ref } from "vue";
import LoginComponent from "../Auth/LoginComponent.vue";
export default {
  components: {
    LoginComponent,
  },
  setup() {
    const isToggleLogin = ref(false);
    function showLogin() {
      isToggleLogin.value = !isToggleLogin.value;
      console.log(isToggleLogin.value);
    }

    return {
      isToggleLogin,
      showLogin,
    };
  },
};
</script>
