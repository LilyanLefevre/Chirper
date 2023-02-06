<script setup lang="ts">
import TweetComponent from "./TweetComponent.vue";
import {Tweet} from "../classes/Tweet";
</script>

<template>
  <TweetComponent :tweet="new Tweet()">test</TweetComponent>
  <TweetComponent :tweet="new Tweet()">test</TweetComponent>
  <TweetComponent :tweet="new Tweet()">test</TweetComponent>
  <TweetComponent :tweet="new Tweet()">test</TweetComponent>
  <TweetComponent :tweet="new Tweet()">test</TweetComponent>
  <TweetComponent :tweet="new Tweet()">test</TweetComponent>
  <TweetComponent :tweet="new Tweet()">test</TweetComponent>
  <TweetComponent :tweet="new Tweet()">test</TweetComponent>
</template>

<style scoped>

</style>
