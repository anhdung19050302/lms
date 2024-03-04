<template>
  <header-component />
  <slot />

  <footer-component />
</template>

<script>
import HeaderComponent from "@/components/GlobalComponent/HeaderComponent.vue";
import FooterComponent from "@/components/GlobalComponent/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      userProfile: {},
    };
  },
};
</script>
