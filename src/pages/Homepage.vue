<script setup lang="ts">
import AuthenticatedLayout from "../layouts/AuthenticatedLayout.vue";
import NavigationPanelComponent from "../components/NavigationPanelComponent.vue";
import {User} from "../classes/User";
import ChirpPanelComponent from "../components/Chirp/ChirpPanelComponent.vue";
import TrendingPanelComponent from "../components/Trending/TrendingPanelComponent.vue";

const user = new User(null);
</script>

<template>
  <AuthenticatedLayout>
    <div class="d-flex" style="height: 100vh;">
      <NavigationPanelComponent :user="user" class="ps-8 pe-6"/>
      <div class="d-flex gap-5">
        <ChirpPanelComponent/>
        <TrendingPanelComponent/>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped>
</style>
