<template>
  <header :class="['main_header', { 'with-aside': isAsideVisible }]">
    <nav class="nav">
      <h1>Моя доска Todo</h1>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isAsideVisible } from "./store";

export default defineComponent({
  name: "HeaderVue",
  setup() {
    return {
      isAsideVisible,
    };
  },
});
</script>

<style lang="scss">
.main_header {
  display: flex;
  align-items: center;
  height: 56px;
  width: 100%;
  background-color: #00000058;
  transition: margin-left 0.3s ease;

  &.shifted {
    transform: translateX(-250px);
  }

  h1 {
    padding-left: 50px;
    font-size: 30px;
    color: white;
  }

  &.with-aside {
    padding-left: 450px; 
  }

  &.without-aside {
    margin-left: 0;
  }
}
</style>
