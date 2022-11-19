<template>
  <div class="block md:grid grid-cols-2 login-screen">
    <div class="block p-6 rounded-lg shadow-lg bg-white place-self-center">
      <form class="max-w-lg" style="min-width: 400px">
        <div class="form-group mb-6">
          <div class="flex gap-4 items-center mb-4">
            <img src="@/assets/images/logo.png" alt="" class="w-10" />
            <span class="text-lg font-bold">Spiral</span>
          </div>

          <label
            for="input-group-1"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your Email</label
          >
          <div class="relative mb-6">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400 z-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                ></path>
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none"
              placeholder="name@flowbite.com"
            />
          </div>
        </div>
        <div class="form-group mb-6">
          <label
            for="exampleInputPassword2"
            class="form-label inline-block mb-2 text-gray-700"
            >Password</label
          >

          <div class="relative mb-6">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                class="w-5 h-5 text-gray-500 dark:text-gray-400 z-10"
              >
                <path
                  fill="currentColor"
                  d="M17 7h5v10h-5v2a1 1 0 0 0 1 1h2v2h-2.5c-.55 0-1.5-.45-1.5-1c0 .55-.95 1-1.5 1H12v-2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2V2h2.5c.55 0 1.5.45 1.5 1c0-.55.95-1 1.5-1H20v2h-2a1 1 0 0 0-1 1v2M2 7h11v2H4v6h9v2H2V7m18 8V9h-3v6h3M8.5 12A1.5 1.5 0 0 0 7 10.5A1.5 1.5 0 0 0 5.5 12A1.5 1.5 0 0 0 7 13.5A1.5 1.5 0 0 0 8.5 12m4.5-1.11c-.61-.56-1.56-.51-2.12.11c-.56.6-.51 1.55.12 2.11c.55.52 1.43.52 2 0v-2.22Z"
                />
              </svg>
            </div>
            <input
              type="password"
              id="input-group-1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none"
              placeholder="*******"
            />
          </div>
        </div>
        <div class="flex justify-between items-center mb-6">
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary-600 checked:border-primary-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck2"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="exampleCheck2"
              >Remember me</label
            >
          </div>
          <a
            href="#!"
            class="text-primary-600 hover:text-primary-700 focus:text-primary-700 transition duration-200 ease-in-out"
            >Forgot password?</a
          >
        </div>
        <button
          type="submit"
          class="w-full px-6 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Sign in
        </button>
        <p class="text-gray-800 mt-6 text-center">
          Not a member?
          <a
            href="#!"
            class="text-primary-600 hover:text-primary-700 focus:text-primary-700 transition duration-200 ease-in-out"
            >Register</a
          >
        </p>
      </form>
    </div>
    <div
      class="bg-gradient-to-r from-primary-100 to-primary-700 flex-grow hidden md:block"
    >
      <div class="place-self-center w-full h-full">
        <img src="@/assets/images/logo.png" alt="" srcset="" class="w-32" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.login-screen {
  height: calc(100vh - 90px);
}
</style>
