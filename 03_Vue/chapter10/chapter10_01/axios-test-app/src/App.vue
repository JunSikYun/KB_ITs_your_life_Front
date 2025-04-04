<template>
  <div id="app">
    <nav><router-link :to="{ name: 'BookList' }">도서 목록</router-link></nav>
    <router-view></router-view>
    <Loading v-if="store.isLoading" />
  </div>
</template>

<script setup>
import Loading from './components/Loading.vue';
import { useBookStore } from './stores/book';

const store = useBookStore();
</script>

<style scoped></style>