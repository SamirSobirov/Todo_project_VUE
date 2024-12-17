<template>
  <header
    :class="[
      'main-header',
      isAsideVisible ? 'main-header--with-aside' : 'main-header--without-aside',
    ]"
  >
    <nav class="main-header__nav">
      <h1 class="main-header__nav__title">Моя доска Todo</h1>
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
