<template>
  <nav class="navbar">
    <router-link class="navbar-item" to="/">Товары</router-link>
    <router-link class="navbar-item" to="/favorite">Любимое</router-link>
    <router-link class="navbar-item" to="/basket">Корзина</router-link>
  </nav>
</template>

<script>
export default {
  name: 'TheNavBar',
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 30px;
  background-color: gray;
  color: aliceblue;
  border-radius: 5px;
}

.navbar-item {
  margin-left: 20px;
  text-decoration: none;
}

.router-link-exact-active {
  color: gray;
  background-color: aliceblue;
}
</style>
