<template>
  <div
    class="h-full bg-gradient-to-tl from-green-400 to-primary-900 w-full py-16 px-4"
  >
    <div class="flex flex-col items-center justify-center">
      <img
        class="w-40 rounded-full"
        src="@/assets/images/logo.png"
        alt="logo"
      />

      <div
        class="bg-white shadow-lg rounded-xl lg:w-1/3 md:w-1/2 w-full p-10 mt-16"
      >
        <p
          tabindex="0"
          class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
        >
          Forgot Password?
        </p>

        <div>
          <div class="mt-2">
            <label
              id="email"
              class="text-sm font-medium leading-none text-gray-800"
            >
              Email
            </label>
            <input
              aria-labelledby="email"
              type="email"
              class="bg-gray-200 border rounded text-xs font-medium leading-none focus:bg-white text-gray-800 py-3 w-full pl-3 mt-2 focus:ring-2 focus:ring-offset-2 focus:ring-primary-700 focus:outline-none"
            />
          </div>

          <div class="mt-8">
            <button
              role="button"
              class="focus:ring-2 focus:ring-offset-2 focus:ring-primary-700 text-sm font-semibold leading-none text-white focus:outline-none bg-primary-700 border rounded hover:bg-primary-600 py-4 w-full"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
