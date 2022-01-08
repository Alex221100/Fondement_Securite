import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    beforeEnter: guardMyroute,
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
    path: "/certificateauthent",
    name: "certificate-authentication",
    component: () => import("@/views/public/Certificate_Authentication.vue"),
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

function guardMyroute(to, from, next) {
  if (from.name == 'certificate-authentication') {
    next()
  } else {
    next('/login'); // go to '/login';
  }
}


export default router;
