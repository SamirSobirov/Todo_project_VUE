<template>
  <header class="header">
    <nav class="nav">
      <h1>TODO</h1>
      <div class="box">
        <input type="text" placeholder="Поиск" />
        <button>Создать</button>
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
