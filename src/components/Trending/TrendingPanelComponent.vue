<template>
  <div class="d-inline-block align-top h-auto text-start position-relative" style="width: 100%;">
    <SearchInputComponent class="pt-2 pb-3"/>
    <div class="panel rounded-4">
        <h4 class="text-start fw-bold p-3 pt-2 pb-2">Trending topics</h4>
        <div class="list-item" v-for="trending in trends">
          <Link disabled :to="'/trending/' + trending.name">
            <TrendingItemComponent :trending="trending"/>
          </Link>
        </div>
    </div>
  </div>
</template>

<script>
import TrendingItemComponent from "./TrendingItemComponent.vue";
import {Trending} from "../../classes/Trending";
import SearchInputComponent from "../SearchInputComponent.vue";
import Link from "../LinkComponent.vue";

export default {
  name: "TrendingPanelComponent",
  components: {SearchInputComponent, TrendingItemComponent, Link},
  data(){
    const trends = [];
    for(let i = 0; i < 6; i++){
      trends.push(new Trending(null));
    }
    return {
      trends
    }
  }
}
</script>

<style scoped>
.panel{
  background-color: #f7f9f9;
}
</style>