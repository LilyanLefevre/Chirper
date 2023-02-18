<script setup lang="ts">
import AuthenticatedLayout from "../layouts/AuthenticatedLayout.vue";
import ProfileSidePanelComponent from "../components/ProfileSidePanelComponent.vue";
import {User} from "../classes/User";
import HomeChirpList from "./HomeChirpList.vue";
import TrendingPanelComponent from "../components/Trending/TrendingPanelComponent.vue";

const user = new User(null);
</script>

<template>
  <AuthenticatedLayout>
    <div class="d-flex" style="height: 100vh;">
      <ProfileSidePanelComponent :user="user" class="ps-6 pe-5"/>
      <HomeChirpList/>
      <TrendingPanelComponent/>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped>
</style>
