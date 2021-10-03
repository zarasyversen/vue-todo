<template>
  <header class="header">
      <h1 class="header__title">Your List of Tasks</h1>
  </header>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Header extends Vue {}
</script>

<style scoped>
.header {
    padding: 20px 0 0;
    line-height: 1.5em;
}

.header__title {
    font-size: 4rem;
    font-weight: 600;
    line-height: 1em;
    text-align: center;
}
</style>