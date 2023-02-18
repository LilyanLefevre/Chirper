<script setup lang="ts">
import ChirpComponent from "./ChirpComponent.vue";
import {Chirp} from "../classes/Chirp";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import {ref} from "vue"; //required if you're not going to override default slots

let chirps = ref([]);
let page = 1;
const load = async ($state: { complete: () => void; loaded: () => void; error: () => void; }) => {
  console.log("loading...");
  setTimeout(()=>{
    for(let i = 0; i <= 5; i++) {
      chirps.value.push(new Chirp());
      $state.loaded();
    }
  }, 2000)

};

</script>

<template>
  <div class="d-inline-block" style="width: 60vw;">
    <div class="result" v-for="chirp in chirps">
      <ChirpComponent :chirp="chirp"></ChirpComponent>
    </div>
    <InfiniteLoading class="mt-2" @infinite="load" />
  </div>
</template>

<style scoped>
</style>
