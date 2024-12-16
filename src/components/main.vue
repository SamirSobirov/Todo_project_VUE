<template>
  <header :class="['main_header', { 'with-aside': isAsideVisible }]">
    <nav class="nav">
      <h1>Моя доска Todo</h1>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isAsideVisible } from "../main";

export default defineComponent({
  name: "HeaderVue",
  setup() {
    return {
      isAsideVisible,
    };
  },
});
</script>

<style lang="scss"></style>
