<template>
  <div>
    <li><input type="checkbox" :checked="checked" />{{ name }}</li>
  </div>
</template>

<script>
export default {
  name: 'CheckboxItem',
  // props: ['name', 'checked'],
  props: {
    id: [Number, String],
    name: String,
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style></style>
