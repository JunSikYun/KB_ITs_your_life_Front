<template>
    <div class="book-list">
      <h1>도서 목록</h1>
      <div class="sort-options">
      <fieldset>
        <legend>정렬 기준</legend>
        <div class="radio-group">
          <input type="radio" v-model="sortBy" value="title" checked />
          제목
          <input type="radio" v-model="sortBy" value="author" />
          저자
          <input type="radio" v-model="sortBy" value="price" />
          가격
        </div>
      </fieldset>
    </div>
      <div v-if="store.error">{{ store.error }}</div>
      <div v-if="books.length === 0" class="no-books">
        조회된 목록이 없습니다.
      </div>
      <div v-else>
        <div v-for="book in books" :key="book.id">
          {{ book.title }}:저자: {{ book.author }}:가격: {{ book.price }} 원
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import {ref} from 'vue';
  import { useBookStore } from '../stores/book';
  const store=useBookStore();
  const sortBy=ref('title');
  store.fetchBooks(sortBy.value);
  </script>
  