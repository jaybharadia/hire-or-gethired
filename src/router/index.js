import { createRouter, createWebHistory } from "vue-router";
import home from "../views/_home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import ForgotPassword from "../views/ForgotPassword.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "hydrate",
    //   redirect: { name: "dashboard" },
    //   component: require("@/views/private/Hydrate").default,
    //   meta: {
    //     label: "Hydrate",
    //     public: false,
    //   },
    //   children: privateRoutes,
    // },
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        breadcrumbs: ["login"],
        public: true,
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
      meta: {
        breadcrumbs: ["signup"],
        public: true,
      },
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: ForgotPassword,
      meta: {
        breadcrumbs: ["forgot-password"],
        public: true,
      },
    },
  ],
});

export default router;
