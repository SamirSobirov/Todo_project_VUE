<script setup lang="ts"></script>

<template>
  <div>
    <headerVue />
    <asideVue />
    <mainVue />
    <mainCard />
  </div>
</template>

<style scoped></style>

<script>
import asideVue from "./components/aside.vue";
import headerVue from "./components/header.vue";
import mainVue from './components/main.vue';
import mainCard from "./components/mainCard.vue";


export default {
  name: "App",
  components: {
    headerVue,
    asideVue,
    mainVue,
    mainCard,
  },
};
</script>
