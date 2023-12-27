<template>
  <nav class="flex items-center justify-between py-2.5 px-8 border-b-2">
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
      <button
        data-modal-target="authentication-modal-login"
        data-modal-toggle="authentication-modal-login"
      >
        Đăng nhập
      </button>
      <button
        class="bg-blue-700 w-24 rounded-full h-10 text-white hover:bg-blue-500"
        data-modal-target="authentication-modal-register"
        data-modal-toggle="authentication-modal-register"
      >
        Đăng ký
      </button>
    </div>
  </nav>
  <login-component />
  <register-component />
</template>

<script>
import { ref } from "vue";
import LoginComponent from "../Auth/LoginComponent.vue";
import RegisterComponent from "../Auth/RegisterComponent.vue";
export default {
  components: {
    LoginComponent,
    RegisterComponent,
  },
  setup() {
    const isToggleLogin = ref(false);
    function showLogin() {
      isToggleLogin.value = !isToggleLogin.value;
    }

    return {
      isToggleLogin,
      showLogin,
    };
  },
};
</script>
