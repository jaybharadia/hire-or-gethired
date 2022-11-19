<template>
  <div>
    <div class="mx-auto p-4 flex justify-center">
      <img src="@/assets/images/banner.jpg" />
    </div>
    <Features class="md:p-4" />
  </div>
</template>

<script>
import Features from "@/components/Features.vue";
export default {
  components: {
    Features,
  },
};
</script>

<style lang="scss" scoped></style>
