<script setup lang="ts">
import TweetComponent from "./TweetComponent.vue";
import {Tweet} from "../classes/Tweet";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import {ref} from "vue"; //required if you're not going to override default slots

let tweets = ref([]);
let page = 1;
const load = async ($state: { complete: () => void; loaded: () => void; error: () => void; }) => {
  console.log("loading...");
  setTimeout(()=>{
    for(let i = 0; i <= 5; i++) {
      tweets.value.push(new Tweet());
      $state.loaded();
    }
  }, 2000)

};

</script>

<template>
  <div class="d-inline-block" style="width: 60vw;">
    <div class="result" v-for="tweet in tweets">
      <TweetComponent :tweet="tweet"></TweetComponent>
    </div>
    <InfiniteLoading class="mt-2" @infinite="load" />
  </div>
</template>

<style scoped>
</style>
