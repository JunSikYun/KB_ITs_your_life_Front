<template>
  <div>
    <li><input type="checkbox" :checked="idol.checked" />{{ idol.name }}</li>
  </div>
</template>

<script>
export default {
  name: 'CheckboxItem',
  props: ['idol'],
};
</script>

<style></style>
