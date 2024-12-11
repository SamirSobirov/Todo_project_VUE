<template>
  <main class="Cards">
    <div></div>
  </main>
</template>



<style lang="scss">
.Cards {
    display: flex;
    margin-left: 500px;
  div {

    height: 300px;
    width: 400px;
    background-color: black;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainCardVue",
});
</script>
