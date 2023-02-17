<template>
  <div class="d-inline-block h-100 align-top pt-2">
    <div class="d-flex">
      <div class="profile-picture flex-shrink-0">
        <img src="/images/default_profile_400x400.png" alt="...">
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

    <ul class="list-group text-start pt-3 ps-2">
      <li class="list-item active">Home</li>
      <li class="list-item">Notifications</li>
      <li class="list-item">Messages</li>
      <li class="list-item">Profile</li>
      <li class="list-item">Settings</li>
    </ul>
  </div>

</template>

<script>
import {User} from "../classes/User.ts";

export default {
  name: "ProfileSidePanelComponent",
  props:{
    user:{
      type: User,
      required: true
    }
  }
}
</script>

<style scoped>
.list-group{
  list-style-type: none !important;
  font-size: 20px !important;
}
.list-item:hover{
  cursor: pointer;
  scale: 1.04;
}
.active{
  font-weight: bold;
}
.active:hover{
  font-weight: bold;
  scale: 1;
  cursor: auto;
}
</style>