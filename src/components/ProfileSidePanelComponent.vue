<template>
  <div class="d-inline-block h-100 align-top pt-2">
    <UserProfile :user="user"></UserProfile>

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
import UserProfile from "./UserProfile.vue";

export default {
  name: "ProfileSidePanelComponent",
  components: {UserProfile},
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