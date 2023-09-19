<template>
    <div class="nav">
      <div class="nav__start">
        <router-link to="/overview">Home</router-link>
        </div>
      <div class="nav__end">
        <LocaleSwitcher />
      </div>
    </div>
  </template>
  <script>
  import LocaleSwitcher from "@/components/LocaleSwitcher"
  export default {
    components: { LocaleSwitcher }
  }
  </script>
  <style scoped>
  .nav {
    display: flex;
    align-items: center;
    text-align: left;
    padding: 1rem;
  }
 
  .nav a {
    margin-right: 1.5rem;
    color: #020000;
    text-decoration: none;
  }
  </style>