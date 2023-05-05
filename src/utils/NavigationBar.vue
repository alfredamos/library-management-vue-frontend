<script setup lang="ts">
import { useAuthUser } from "@/composables/useAuthUser";

const { authUser } = useAuthUser();
</script>

<template>
  <ul class="nav nav-pills mb-3 mt-3 d-flex justify-content-center">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/authors">Authors </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/books">Books</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/categories"
        >Categories</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/departments">Departments</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/users">Users</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/login" v-if="!authUser.isLoggedIn"
        >Login</router-link
      >
    </li>
    <li class="nav-item" v-if="authUser.isLoggedIn">
      <router-link class="nav-link" to="/logout">Logout</router-link>
    </li>
    <li class="dropdown" v-if="authUser.isLoggedIn">
      <router-link
        class="btn btn-link dropdown-toggle"
        to="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Settings
      </router-link>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
          <router-link class="dropdown-item" to="/change-password"
            >Change Password</router-link
          >
        </li>
        <li>
          <router-link class="dropdown-item" to="/edit-profile"
            >Edit Profile</router-link
          >
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.nav {
  border-bottom: 1px solid azure;
  border-top: 1px solid azure;
  background-color: azure;
  padding: 10px;
  box-shadow: 1px 1px 1px 1px rgba(235, 232, 232, 0.5);
}

.btn-link {
  text-decoration: none;
}

.btn-link,
.nav-link {
  color: black;
}
.btn-link:hover,
.nav-link:hover {
  color: red;
}
</style>
