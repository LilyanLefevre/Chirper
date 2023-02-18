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
      <NavigationPanelComponent :user="user" class="ps-6 pe-5"/>
      <div class="d-flex gap-4">
        <ChirpPanelComponent/>
        <TrendingPanelComponent/>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped>
</style>
