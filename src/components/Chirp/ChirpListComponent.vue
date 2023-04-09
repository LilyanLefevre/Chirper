<script setup lang="ts">
import ChirpItemComponent from "./ChirpItemComponent.vue";
import {Chirp} from "../../classes/Chirp";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import {ref} from "vue";

let chirps = ref<Chirp[]>([]);
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
  <div class="d-inline-block overflow-scroll" style="width: 50vw; ">
    <div v-for="chirp in chirps.values">
      <ChirpItemComponent :chirp="chirp"></ChirpItemComponent>
    </div>
    <InfiniteLoading class="mt-2" @infinite="load" />
  </div>
</template>

<style scoped>
</style>
