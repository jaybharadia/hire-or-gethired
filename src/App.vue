<template>
  <div>
    <TheHeader />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    // TheHeader: () => import("@/components/TheHeader.vue"),
    TheHeader,
  },
};
</script>

<style scoped></style>
