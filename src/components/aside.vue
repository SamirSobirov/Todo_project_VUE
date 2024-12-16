<template>
  <div>
    <aside :class="['sidebar', { 'sidebar--hidden': !isAsideVisible }]">
      <div class="sidebar__header">
        <h3>
          TODO: рабочее пространство
          <p>Бесплатно</p>
        </h3>
        <button @click="toggleAside">
          <img :src="arrowLeftIcon" alt="arrow" />
        </button>
      </div>
      <hr />
      <div class="sidebar__menu">
        <button class="sidebar__button sidebar__button--active">
          <img :src="boardIcon" alt="" />
          <p><i>Доски</i></p>
        </button>
        <button class="sidebar__button">
          <img :src="participantsIcon" alt="" />
          <p><i>Участники</i></p>
        </button>
      </div>
      <div class="sidebar__view-mode">
        <p>Режимы просмотра рабочего пространства...</p>
      </div>
      <div class="sidebar__menu">
        <button class="sidebar__button">
          <img :src="participantsIcon" alt="" />
          <p><i>Таблица</i></p>
        </button>
        <button class="sidebar__button sidebar__button--with-icon">
          <img :src="participantsIcon" alt="" />
          <p><i>Календарь</i></p>
        </button>
      </div>
    </aside>
    <button v-if="!isAsideVisible" @click="toggleAside" class="sidebar__toggle">
      Open Aside
    </button>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import arrowLeftIcon from "../assets/images/arrow_left.svg";
import boardIcon from "../assets/images/board.svg";
import participantsIcon from "../assets/images/participants.svg";
import { isAsideVisible } from "../main";

interface SetupReturn {
  isAsideVisible: typeof isAsideVisible;
  toggleAside: () => void;
  arrowLeftIcon: string;
  boardIcon: string;
  participantsIcon: string;
}

export default defineComponent({
  name: "WorkspaceSidebar",
  setup(): SetupReturn {
    const toggleAside = () => {
      isAsideVisible.value = !isAsideVisible.value;
    };

    return {
      isAsideVisible,
      toggleAside,
      arrowLeftIcon,
      boardIcon,
      participantsIcon,
    };
  },
});
</script>

<style lang="scss"></style>
