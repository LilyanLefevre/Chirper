<template>
  <a :href="to" class="no-style-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "LinkComponent",
  props:{
    to: {
      type: String,
      required: true
    }
  }
}
</script>
