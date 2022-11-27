import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/form",
    component: () => import("layouts/EmptyLayout.vue"),
    children: [{ path: "", component: () => import("pages/FormPage.vue") }],
  },
  {
    path: "/hh",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/HHPage.vue") }],
  },
  {
    path: "/habr",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/HabrPage.vue") }],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
