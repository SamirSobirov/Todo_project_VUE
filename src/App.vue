<script setup lang="ts"></script>

<template>
  <div>
    <headerVue />
    <asideVue />
    <mainVue />
  </div>
</template>

<style scoped></style>

<script>
import asideVue from "./components/aside.vue";
import headerVue from "./components/header.vue";
import mainVue from './components/main.vue';


export default {
  name: "App",
  components: {
    headerVue,
    asideVue,
    mainVue
  },
};
</script>
