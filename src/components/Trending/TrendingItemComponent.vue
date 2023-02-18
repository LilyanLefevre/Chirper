<template>
  <div class="trending pt-2 pb-2 ps-3 pe-3" style="min-width: 20vw">
    <div class="small">Popular in {{ trending.category }} category</div>
    <div class="fw-bold">{{ trending.name }}</div>
    <div class="small">{{ trending.chirps }} Chirps</div>
  </div>
</template>

<script>
import {Trending} from "../../classes/Trending";

export default {
  name: "TrendingItemComponent",
  props:{
    trending: {
      type: Trending,
      required: true
    }
  }
}
</script>

<style scoped>
.trending{
  transition: background-color 0.5s ease;
}
.trending:hover{
  cursor: pointer;
  transition: background-color 0.5s ease;
  background-color: rgba(15, 20, 25, 0.1);
}
</style>