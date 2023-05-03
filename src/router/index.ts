import { createRouter, createWebHistory } from 'vue-router'
import ListLibraryView from "@/views/libraries/ListLibraryView.vue";

import ListAuthorView from "@/views/authors/ListAuthorView.vue";

import ListBookCatView from "@/views/book-cats/ListBookCatView.vue";

import ListBookView from "@/views/books/ListBookView.vue";

import ListDepartmentView from "@/views/departments/ListDepartmentView.vue";

import ListUserView from "@/views/users/ListUserView.vue";

import LoginView from "@/views/auth/LoginView.vue";
import LogoutView from "@/views/auth/LogoutView.vue";
import ChangePasswordView from "@/views/auth/ChangePasswordView.vue";
import EditProfileView from "@/views/auth/EditProfileView.vue";
import HomeView from "@/views/auth/HomeView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "libraries",
      component: ListLibraryView,
    },

    {
      path: "/authors",
      name: "authors",
      component: ListAuthorView,
    },

    {
      path: "/books",
      name: "books",
      component: ListBookView,
    },

    {
      path: "/book-categories",
      name: "book-categories",
      component: ListBookCatView,
    },

    {
      path: "/departments",
      name: "departments",
      component: ListDepartmentView,
    },

    {
      path: "/users",
      name: "users",
      component: ListUserView,
    },

    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
    },

    {
      path: "/change-password",
      name: "change-password",
      component: ChangePasswordView,
    },

    {
      path: "/edit-profile",
      name: "edit-profile",
      component: EditProfileView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router
