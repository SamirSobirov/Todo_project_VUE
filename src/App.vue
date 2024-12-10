<script setup lang="ts"></script>

<template>
  <div>
    <headerVue />
    <asideVue />
  </div>
</template>

<style scoped></style>

<script>
import asideVue from "./components/aside.vue";
import headerVue from "./components/header.vue";

export default {
  name: "App",
  components: {
    headerVue,
    asideVue
  },
};
</script>
