<template>
  <div>
    <button @click="suggestFood">음식 추천</button>
  </div>
</template>

<script>
export default {
  name: 'FoodItem',
  methods: {
    suggestFood() {
      //이벤트 코드....

      this.$emit('suggest', '김치찌개');
    },
  },
};
</script>

<style></style>
