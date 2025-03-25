<template>
  <div>
    <h1>음식 목록</h1>
    <FoodItem
      v-for="food in foodItems"
      :key="food.id"
      :food="food"
      @toggle-cart="updateCart"
    />

    <h2>장바구니</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - {{ item.price }}원
      </li>
    </ul>
    <p>총 금액: {{ totalPrice }}원</p>
  </div>
</template>

<script>
import FoodItem from './components/FoodItem.vue';

export default {
  name: 'App',
  components: {
    FoodItem,
  },
  data() {
    return {
      foodItems: [
        { id: 1, name: '사과', price: 5000, category: '과일' },
        { id: 2, name: '바나나', price: 3000, category: '과일' },
        { id: 3, name: '오렌지', price: 4000, category: '과일' },
      ],
      cart: [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + item.price, 0);
    },
  },
  methods: {
    updateCart(food, isSelected) {
      if (isSelected) {
        this.cart.push(food);
      } else {
        this.cart = this.cart.filter((item) => item.id !== food.id);
      }
    },
  },
};
</script>
