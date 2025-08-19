


<template>
  <main class="home-menu">
    <ul class="app-list">
      <!-- <li>
        <router-link to="/haiku" class="app-link">Haiku Generator</router-link>
      </li> -->
      <li>
        <router-link to="/joke" class="app-link">Joke Generator</router-link>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home-menu {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #4F436F;
}
.app-list {
  list-style: none;
  padding: 0;
}
.app-link {
  display: inline-block;
  padding: 1.2rem 2.5rem;
  margin: 1rem 0;
  background: var(--color-highlight);
  color: #fff;
  border-radius: 0.7rem;
  font-size: 1.3rem;
  text-decoration: none;
  font-family: 'Google Play', 'Raleway', Arial, sans-serif;
  transition: background 0.2s;
}
.app-link:hover {
  background: var(--color-accent);
}
</style>
