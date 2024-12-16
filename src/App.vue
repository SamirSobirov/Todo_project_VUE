<template>
  <div>
    <headerVue />
    <WorkspaceSidebar />
    <mainVue />
    <mainCard />
  </div>
</template>

<script>
import WorkspaceSidebar from "@/components/aside.vue";
import headerVue from "@/components/header.vue";
import mainVue from "@/components/main.vue";
import mainCard from "@/components/mainCard.vue";

export default {
  name: "App",
  components: {
    headerVue,
    WorkspaceSidebar,
    mainVue,
    mainCard,
  },
};
</script>
