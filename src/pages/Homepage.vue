<script setup lang="ts">
import AuthenticatedLayout from "../layouts/AuthenticatedLayout.vue";
import ProfileSidePanelComponent from "../components/ProfileSidePanelComponent.vue";
import {User} from "../classes/User.ts";
import HomeChirpList from "./HomeChirpList.vue";</script>

<template>
  <AuthenticatedLayout>
    <div class="d-flex" style="height: 100vh;">
      <ProfileSidePanelComponent :user="new User(null)" class="ps-6 pe-5"/>
      <HomeChirpList/>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped>
</style>
