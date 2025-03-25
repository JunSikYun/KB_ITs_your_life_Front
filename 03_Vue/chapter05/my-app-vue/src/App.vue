<template>
  <h1>여기는 App.vue</h1>
  <food-item @suggest="handleSuggest" />
  {{ suggested }}
  <book-item @recommend="handlRecommend" />
  {{ recommend }}
  <!-- <book-item title="자바" author="글쓴이" /> -->
  <!--
    BookItem.vue
    <h3>도서</h3>
    //속성 출력

    속성 : title, author

    App.vue 에서 태그 써먹기기
  -->
</template>

<script>
import FoodItem from './components/FoodItem.vue';
import BookItem from './components/BookItem.vue';

export default {
  name: 'App',
  components: { FoodItem, BookItem },
  data() {
    return {
      suggested: '',
      recommend: '',
    };
  },
  methods: {
    //this.$emit('suggest','김치찌개','부대찌개')
    handleSuggest(item) {
      this.suggested = item;
    },
    handlRecommend(item) {
      this.recommend = item;
    },
  },
};
</script>

<style></style>
