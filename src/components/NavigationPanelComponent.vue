<template>
  <div class="d-inline-block align-top h-auto text-start position-relative">
    <div class="list-item">
      <a href="#">
        <img class="mt-2"  src="../../public/images/logo.svg" alt="Chirper logo" width="50" height="50">
      </a>
    </div>
    <ul class="list-group pt-3">
      <li class="list-item active"><span>Home</span></li>
      <li class="list-item">Notifications</li>
      <li class="list-item">Messages</li>
      <li class="list-item">Profile</li>
      <li class="list-item">Settings</li>
      <li class="list-item chirp-button">Chirp</li>
    </ul>
    <div class="list-item position-absolute" style="bottom: 1vh; left: 8vh;">
      <UserProfile :user="user"></UserProfile>
    </div>

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
  font-size: 18px !important;
}
.list-item{
  width: fit-content;
  margin-bottom: 0.5rem;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  transition: background-color 0.5s ease;
}
.chirp-button{
  background-color: rgb(29, 155, 240);
  border-radius: 9999px;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  color: white;
  width: 100%;
}
.list-item:hover{
  cursor: pointer;
  transition: background-color 0.5s ease;
  background-color: rgba(15, 20, 25, 0.1);
}
.chirp-button:hover{
  background-color: rgb(24, 127, 197);
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