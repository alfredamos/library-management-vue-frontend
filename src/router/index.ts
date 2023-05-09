import { createRouter, createWebHistory } from "vue-router";
import ListLibraryView from "@/views/libraries/ListLibraryView.vue";
import AddLibraryView from "@/views/libraries/AddLibraryView.vue";
import DetailLibraryView from "@/views/libraries/DEtailLibraryView.vue"
import EditLibraryView from "@/views/libraries/EditLibraryView.vue";

import ListAuthorView from "@/views/authors/ListAuthorView.vue";
import AddAuthorView from "@/views/authors/AddAuthorView.vue";
import DetailAuthorView from "@/views/authors/DetailAuthorView.vue";
import EditAuthorView from "@/views/authors/EditAuthorView.vue";

import ListBookCatView from "@/views/book-cats/ListBookCatView.vue";
import AddBookCatView from "@/views/book-cats/AddBookCatView.vue";
import EditBookCatView from "@/views/book-cats/EditBookCatView.vue";
import DetailBookCatView from "@/views/book-cats/DetailBookCatView.vue";

import ListBookView from "@/views/books/ListBookView.vue";
import AddBookView from "@/views/books/AddBookView.vue";
import DetailBookView from "@/views/books/DetailBookView.vue";
import EditBookView from "@/views/books/EditBookView.vue";

import ListDepartmentView from "@/views/departments/ListDepartmentView.vue";
import AddDepartmentView from "@/views/departments/AddDepartmentView.vue";
import DetailDepartmentView from "@/views/departments/DetailDepartmentView.vue";
import EditDepartmentView from "@/views/departments/EditDepartmentView.vue";

import ListUserView from "@/views/users/ListUserView.vue";
import DetailUserView from "@/views/users/DetailUserView.vue"

import LoginView from "@/views/auth/LoginView.vue";
import LogoutView from "@/views/auth/LogoutView.vue";
import ChangePasswordView from "@/views/auth/ChangePasswordView.vue";
import EditProfileView from "@/views/auth/EditProfileView.vue";
import HomeView from "@/views/auth/HomeView.vue";
import SignupView from "@/views/auth/SignupView.vue";

import { apiContext } from "@/behavior-subject/auth-context.rxjs";
import { tap } from "rxjs";
import { ref } from "vue";
import type AuthUserDto from "@/models/auth/auth-user.model";
import { initialAuthUser } from "../utils/authUser-initial.util";

const authUser = ref<AuthUserDto>(initialAuthUser);

apiContext.authUser$
  .pipe(
    tap((autUser) => {
      authUser.value = autUser;
    })
  )
  .subscribe();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "libraries",
      component: ListLibraryView,
      meta: { needsAuth: true },
    },
    {
      path: "/add-library",
      name: "add-library",
      component: AddLibraryView,
      meta: { needsAuth: true },
    },
    {
      path: "/detail-library/:id",
      name: "detail-library",
      component: DetailLibraryView,
      meta: { needsAuth: true },
    },
    {
      path: "/edit-library/:id",
      name: "edit-library",
      component: EditLibraryView,
      meta: { needsAuth: true },
    },

    {
      path: "/authors",
      name: "authors",
      component: ListAuthorView,
      meta: { needsAuth: true },
    },
    {
      path: "/add-author",
      name: "add-author",
      component: AddAuthorView,
      meta: { needsAuth: true },
    },
    {
      path: "/delete-author/:id",
      name: "delete-author",
      component: AddAuthorView,
      meta: { needsAuth: true },
    },
    {
      path: "/detail-author/:id",
      name: "detail-author",
      component: DetailAuthorView,
      meta: { needsAuth: true },
    },
    {
      path: "/edit-author/:id",
      name: "edit-author",
      component: EditAuthorView,
      meta: { needsAuth: true },
    },

    {
      path: "/books",
      name: "books",
      component: ListBookView,
      meta: { needsAuth: true },
    },
    {
      path: "/add-book",
      name: "add-book",
      component: AddBookView,
      meta: { needsAuth: true },
    },
    {
      path: "/detail-book/:id",
      name: "detail-book",
      component: DetailBookView,
      meta: { needsAuth: true },
    },
    {
      path: "/edit-book/:id",
      name: "edit-book",
      component: EditBookView,
      meta: { needsAuth: true },
    },

    {
      path: "/categories",
      name: "categories",
      component: ListBookCatView,
      meta: { needsAuth: true },
    },
    {
      path: "/add-category",
      name: "add-category",
      component: AddBookCatView,
      meta: { needsAuth: true },
    },
    {
      path: "/detail-category/:id",
      name: "detail-category",
      component: DetailBookCatView,
      meta: { needsAuth: true },
    },
    {
      path: "/edit-category/:id",
      name: "edit-category",
      component: EditBookCatView,
      meta: { needsAuth: true },
    },

    {
      path: "/departments",
      name: "departments",
      component: ListDepartmentView,
      meta: { needsAuth: true },
    },
    {
      path: "/add-department",
      name: "add-department",
      component: AddDepartmentView,
      meta: { needsAuth: true },
    },
    {
      path: "/detail-department/:id",
      name: "detail-department",
      component: DetailDepartmentView,
      meta: { needsAuth: true },
    },
    {
      path: "/edit-department/:id",
      name: "edit-department",
      component: EditDepartmentView,
      meta: { needsAuth: true },
    },

    {
      path: "/users",
      name: "users",
      component: ListUserView,
      meta: { needsAuth: true },
    },
    {
      path: "/detail-user/:id",
      name: "detail-user",
      component: DetailUserView,
      meta: { needsAuth: true },
    },

    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { needsNoAuth: true },
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
      meta: { needsAuth: true },
    },

    {
      path: "/change-password",
      name: "change-password",
      component: ChangePasswordView,
      meta: { needsAuth: true },
    },

    {
      path: "/edit-profile",
      name: "edit-profile",
      component: EditProfileView,
      meta: { needsAuth: true },
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: { needsNoAuth: true },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
      meta: { needsNoAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth && !authUser.value.isLoggedIn) next({ name: "login" });
  else next();
});

export default router;
