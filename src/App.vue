<template>
  <div>
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    // TheHeader: () => import("@/components/TheHeader.vue"),
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped></style>
