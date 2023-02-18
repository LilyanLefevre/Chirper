<template>
  <div class="chirp border border-light border-2 p-3">
    <UserProfile :user="chirp.user"></UserProfile>

    <div>
      <div class="text-start">
        {{ chirp.message }}
      </div>

      <div class=" small text-secondary text-start">
        {{ chirp.date.toLocaleTimeString('fr').substring(0, 5) + " le " + chirp.date.toLocaleDateString('fr') }}
      </div>

      <div class="d-flex pt-4">
        <div class="action me-2 comment">
          <i class="bi bi-chat text-info"></i>
          <div class="number">{{ chirp.comments }}</div>
        </div>
        <div class="action me-2 rechirp">
          <i class="bi bi-arrow-repeat text-success"></i>
          <div class="number">{{ chirp.rechirps }}</div>
        </div>
        <div class="action like">
          <i class="bi bi-heart text-danger"></i>
          <div class="number">{{ chirp.likes }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {Chirp} from "../../classes/Chirp";
import UserProfile from "../UserProfile.vue";

const props = defineProps({
  chirp: Chirp
});

</script>

<style scoped>
.chirp{
  transition: background-color 0.5s ease-out 0s

}
.chirp:hover{
  background-color: rgba(0, 0, 0, 0.03);
  cursor: pointer;
  transition: background-color 0.5s ease-out 0s
}

.action{
  display: inline;
  margin-right: 3rem !important;
}

.comment:hover i{
  color: #00e1ff !important;
}

.like:hover i{
  color: #fc1313 !important;
}

.rechirp:hover i{
  color: #04b404 !important;
}

.number{
  margin-left: 0.5vw;
  display: inline;
}

</style>