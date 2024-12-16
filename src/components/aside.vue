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
            <img :src="arrowLeftIcon" alt="arrow" />
          </button>
        </div>
        <hr />
        <div class="aside-box3">
          <button class="aside-button_2" style="margin-right: 30px">
            <img :src="boardIcon" alt="" />
            <p>Доски</p>
          </button>
          <button class="aside-button_2">
            <img :src="participantsIcon" alt="" />
            <p>Участники</p>
          </button>
        </div>
        <div class="aside-box2">
          <p>Режимы просмотра рабочего пространства...</p>
        </div>
        <div class="aside-box3">
          <button class="aside-button_2">
            <img :src="participantsIcon" alt="" />
            <p>Таблица</p>
          </button>
          <button class="aside-button_2" style="padding-left: 15px">
            <img :src="participantsIcon" alt="" />
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
import arrowLeftIcon from "../assets/images/arrow_left.svg";
import boardIcon from "../assets/images/board.svg";
import participantsIcon from "../assets/images/participants.svg";
import { isAsideVisible } from "../main";

export default defineComponent({
  name: "WorkspaceSidebar",
  setup() {
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
