import { createRouter, createWebHistory } from "vue-router";
import Signup from "../components/SignupPage.vue";
import Login from "../components/LoginPage.vue";
import Dashboard from "../components/Dashboard.vue";
import Landing from "../components/LandingPage.vue";
import CreatePost from "../components/CreatePost.vue";

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/createPost",
    name: "CreatePost",
    component: CreatePost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
