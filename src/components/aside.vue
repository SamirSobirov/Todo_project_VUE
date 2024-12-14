<template>
  <div>
    <aside :class="{ 'aside-block': true, hidden: !isAsideVisible }">
      <div class="box">
        <div class="aside-box1">
          <h3>
            TODO: рабочее пространство
            <p>Бесплатно</p>
          </h3>
          <button @click="toggleAside">
            <img src="../../public/icons/arrow_left.svg" alt="arrow" />
          </button>
        </div>
        <hr />
        <div class="aside-box3">
          <button class="aside-button_2" style="margin-right: 30px">
            <img src="../../public/icons/board.svg" alt="" />
            <p>Доски</p>
          </button>
          <button class="aside-button_2">
            <img src="../../public/icons/participants.svg" alt="" />
            <p>Участники</p>
          </button>
        </div>
        <div class="aside-box2">
          <p>Режимы просмотра рабочего пространства...</p>
        </div>
        <div class="aside-box3">
          <button class="aside-button_2">
            <img src="../../public/icons/participants.svg" alt="" />
            <p>Таблица</p>
          </button>
          <button class="aside-button_2" style="padding-left: 15px">
            <img src="../../public/icons/participants.svg" alt="" />
            <p>Календарь</p>
          </button>
        </div>
      </div>
    </aside>
    <button v-if="!isAsideVisible" @click="toggleAside" class="open-aside">
      Open Aside
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isAsideVisible } from "./store";

export default defineComponent({
  name: "AsideVue",
  setup() {
    const toggleAside = () => {
      isAsideVisible.value = !isAsideVisible.value;
    };

    return {
      isAsideVisible,
      toggleAside,
    };
  },
}); 
</script>

<style lang="scss"></style>
