<template>
  <div class="d-flex">
    <div class="profile-picture flex-shrink-0">
      <img src="/images/default_profile_400x400.png" :alt="'Profile picture of ' + user.name">
    </div>

    <div class="flex-grow-1 ms-3 mb-3">
      <div class="text-start">
        <div class="fw-bold">
          {{ user.name }}
        </div>
        <div class="small text-secondary">
          @{{ user.username }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {User} from "../classes/User.ts";

export default {
  name: "UserProfile",
  props:{
    user: {
      type: User,
      required: true
    }
  }
}
</script>

<style scoped>

</style>