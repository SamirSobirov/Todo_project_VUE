<template>
  <header class="header">
    <nav class="header__nav">
      <h1 class="header__nav__title">TODO</h1>
      <div class="header__nav__controls">
        <input
          type="text"
          class="header__nav__controls-input"
          placeholder="Поиск"
        />
        <button class="header__nav__controls-button">Создать</button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderVue",
});
</script>

<style lang="scss"></style>
