<template>
  <div>
    <!-- 버튼을 누르면 recommendBook()가 실행 -->
    <button @click="recommendBook">도서 추천</button>
  </div>
</template>

<script>
export default {
  name: 'BookItem',
  props: ['title', 'author'],
  methods: {
    recommendBook() {
      this.$emit('recommend', '해리포터');
    },
  },
};
</script>

<style></style>
