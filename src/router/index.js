import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddCustomer from "../views/AddCustomer.vue";
import Customer from "../views/Customer.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/customers/new",
    name: "AddCustomer",
    component: AddCustomer,
  },
  {
    path: "/customers/:id",
    name: "Customer",
    component: Customer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
