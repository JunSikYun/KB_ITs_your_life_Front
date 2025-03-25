<template>
  <div>
    <input type="checkbox" :checked="isSelected" @change="toggleCart" />
    <span>{{ food.name }} - {{ food.price }}원</span>
  </div>
</template>

<script>
export default {
  name: 'FoodItem',
  props: {
    food: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    toggleCart() {
      this.isSelected = !this.isSelected;
      this.$emit('toggle-cart', this.food, this.isSelected);
    },
  },
};
</script>
