<template>
  <div class="flex justify-center">
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
      <!-- <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light"> -->
      <img class="rounded-t-lg" :src="img" alt="" />
      <!-- </a> -->
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2">{{ title }}</h5>
        <p class="text-gray-700 text-base mb-4">
          {{ description }}
        </p>
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Button
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque voluptas omnis itaque est magni debitis quis ratione consequatur labore reiciendis, totam, officiis, voluptate necessitatibus officia dolorum iste facere voluptatem provident tempora fuga incidunt! Facere, illo cum quibusdam amet blanditiis ratione. Recusandae laudantium repudiandae neque deleniti at hic, blanditiis voluptates.",
    },
    img: {
      type: String,
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
