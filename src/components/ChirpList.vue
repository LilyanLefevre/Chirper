<script setup lang="ts">
import TweetComponent from "./TweetComponent.vue";
import {Tweet} from "../classes/Tweet";
</script>

<template>
  <TweetComponent :tweet="new Tweet()"></TweetComponent>
  <TweetComponent :tweet="new Tweet()"></TweetComponent>
  <TweetComponent :tweet="new Tweet()"></TweetComponent>
  <TweetComponent :tweet="new Tweet()"></TweetComponent>
  <TweetComponent :tweet="new Tweet()"></TweetComponent>
  <TweetComponent :tweet="new Tweet()"></TweetComponent>
  <TweetComponent :tweet="new Tweet()"></TweetComponent>
  <TweetComponent :tweet="new Tweet()"></TweetComponent>
</template>

<style scoped>

</style>
