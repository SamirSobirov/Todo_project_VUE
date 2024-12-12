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

<style lang="scss">
.aside-block {
  width: 250px;
  height: 100%;
  background-color: #333;
  transition: transform 0.3s ease-in-out;

  &.shifted {
    transform: translateX(-250px);
  }
}

.aside-block {
  width: 430px;
  height: 100vh;
  background-color: #161a1d;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;

  &.hidden {
    transform: translateX(-100%);
  }

  .box {
    // padding: 0 10px;
    align-items: center;
    justify-content: center;

    .aside-box1 {
      margin-top: 30px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      h3 {
        font-size: 25px;
        color: #9fadbc;
        p {
          font-size: 14px;
          font-weight: 400;
        }
      }

      button {
        background-color: #161a1d;
        border: none;
        padding: 5px 5px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.3s ease;

        img {
          height: 22px;
          width: 22px;
        }

        &:hover {
          background-color: #424242;
        }
      }
    }

    .aside-box3 {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      align-items: center;
      justify-content: center;
      text-align: left;
      gap: 10px;
    }

    .aside-button_2 {
      @extend .aside-button-base;
      padding-right: 280px;
    }

    .aside-button-base {
      display: flex;
      width: 100%;
      text-align: left;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: #161a1d;
      color: white;

      p {
        padding: 10px;
        font-weight: 100;
        font-size: 17px;
      }

      img {
        padding-left: 2px;
        width: 20px;
        height: 20px;
      }

      &:hover {
        background-color: #424242;
      }
    }

    .aside-box2 {
      margin-top: 40px;
      display: flex;
      align-items: center;
      padding: 10px;

      p {
        color: white;
        font-size: 20px;
      }
    }
  }
}

.open-aside {
  position: fixed;
  top: 20px;
  margin-left: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
}
</style>
