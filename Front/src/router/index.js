import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layout/layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/public/Login.vue"),
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/create-account",
    name: "create-account",
    component: () => import("@/views/public/Create-Account.vue"),
    meta: {
      layout: "blank",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
