<template>
  <!-- <div> -->
  <div class="bg-white dark:bg-gray-800 rounded shadow-lg py-5 px-7">
    <nav class="flex justify-between">
      <div class="flex items-center space-x-3 lg:pr-16 pr-6">
        <img
          class="cursor-pointer dark:bg-white p-1 rounded-full max-w-[50px]"
          src="@/assets/images/logo.png"
          alt="circle"
        />
        <h2
          class="font-normal text-2xl leading-6 text-gray-800 dark:text-white"
        >
          Spiral
        </h2>
      </div>

      <!-- For medium and plus sized devices -->

      <!-- Extra menu items  -->
      <!-- <ul class="hidden md:flex flex-auto space-x-2">
        <li
          v-for="(menuItem, index) in $options.menu"
          :key="index"
          @click="selected"
          class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded"
        >
          {{ menuItem.label }}
        </li>
      </ul> -->

      <!-- Login sigup Desktop -->
      <ul class="hidden md:flex space-x-2">
        <li
          v-for="(menuItem, index) in $options.menu"
          :key="index"
          @click="selected($event, menuItem)"
          class="focus:outline-none flex items-center focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 font-normal text-xs shadow-md rounded"
        >
          {{ menuItem.label }}
        </li>
      </ul>

      <!-- Notifcation any thing else only icons -->

      <!-- <div class="flex space-x-5 justify-center items-center pl-2">
        <div
          class="relative dark:bg-white rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-1-svg2.svg"
            alt="chat"
          />
          <div
            class="animate-ping w-1.5 h-1.5 bg-primary-700 rounded-full absolute -top-1 -right-1 m-auto duration-200"
          ></div>
          <div
            class="w-1.5 h-1.5 bg-primary-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"
          ></div>
        </div>

        <img
          class="cursor-pointer dark:bg-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-1-svg3.svg"
          alt="bell"
        />
      </div> -->
    </nav>
    <!-- for smaller devcies -->

    <div class="block md:hidden w-full mt-5">
      <div
        @click="selectNew"
        class="cursor-pointer px-4 py-3 text-white bg-primary-600 rounded flex justify-between items-center w-full"
      >
        <div class="flex space-x-2">
          <span id="s1" class="font-semibold text-sm leading-3 hidden"
            >Selected:
          </span>
          <p
            id="textClicked"
            class="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer"
          >
            Collections
          </p>
        </div>
        <img
          id="ArrowSVG"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-1-svg4.svg"
          alt="down arrow"
          class="rotate-180 transform"
        />
      </div>
      <div class="relative">
        <ul
          id="list"
          class="hidden font-normal text-base leading-4 absolute top-2 w-full rounded shadow-md z-20"
        >
          <li
            v-for="(menuItem, index) in $options.menu"
            :key="index"
            @click="selectedSmall($event, menuItem)"
            class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs font-normal focus:text-black"
          >
            {{ menuItem.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  menu: [
    {
      label: "Login",
      href: { path: "/login" },
    },
    {
      label: "Sign up",
      href: { path: "/signup" },
    },
  ],
  methods: {
    selected(event, menuItem) {
      if (menuItem.href) this.$router.push(menuItem.href);

      var targeted = event.target;
      var clicked = targeted.parentElement;

      var child = clicked.children;
      console.log(child);

      for (let i = 0; i < child.length; i++) {
        if (child[i].classList.contains("text-white")) {
          console.log(child[i]);
          child[i].classList.remove("text-white", "bg-primary-600");
          child[i].classList.add(
            "text-gray-600",
            "bg-gray-50",
            "border",
            "border-white"
          );
        }
      }

      targeted.classList.remove(
        "text-gray-600",
        "bg-gray-50",
        "border",
        "border-white"
      );
      targeted.classList.add("text-white", "bg-primary-600");
    },

    selectedSmall(event, menuItem) {
      if (menuItem.href) this.$router.push(menuItem.href);

      var targeted = event.target;
      var clicked = targeted.parentElement;

      var child = clicked.children;

      for (let i = 0; i < child.length; i++) {
        if (child[i].classList.contains("text-white")) {
          child[i].classList.remove("bg-primary-600");
          child[i].classList.add(
            "text-gray-600",
            "bg-gray-50",
            "border",
            "border-white"
          );
        }
      }

      targeted.classList.remove(
        "text-gray-600",
        "bg-gray-50",
        "border",
        "border-white"
      );

      document.getElementById("s1").classList.add("hidden");
      document.getElementById("textClicked").innerHTML = targeted.innerHTML;
      // close dropdown
      var newL = document.getElementById("list");
      newL.classList.toggle("hidden");
      document.getElementById("ArrowSVG").classList.toggle("rotate-180");
    },
    selectNew() {
      console.log("inside select new");
      var newL = document.getElementById("list");
      newL.classList.toggle("hidden");

      document.getElementById("ArrowSVG").classList.toggle("rotate-180");
    },
  },
};
</script>

<style lang="scss" scoped></style>
