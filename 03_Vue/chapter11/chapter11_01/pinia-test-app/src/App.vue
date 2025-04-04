<script setup>
import { useCounterStore } from './stores/counter';
import {computed} from 'vue';
const store=userCounterStore();
const {increment}=store;
const count=computed(()=>store.count);

increment();
console.log(count);
</script>


<template>
  {{ store }}/{{ store.doubleCount }}<br/>
  {{ count }}
</template>