<template>
  <div class="input-group">
    <input class="form-control border rounded-pill" type="search" value="Search">
    <span class="input-group-append">
          <button class="btn rounded-pill ms-n5" type="button">
              <i class="bi bi-search"></i>
          </button>
    </span>
  </div>
</template>

<script>
export default {
  name: "SearchInputComponent"
}
</script>

<style scoped>
.ms-n5 {
  margin-left: -40px;
}
</style>