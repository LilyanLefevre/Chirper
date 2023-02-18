<template>
  <div class="chirp border border-light border-2 p-3">

    <div class="d-flex">
      <div class="profile-picture flex-shrink-0">
        <img src="/images/default_profile_400x400.png" alt="...">
      </div>

      <div class="flex-grow-1 ms-3 mb-3">
        <div class="text-start">
          <div class="fw-bold">
            {{ chirp.user.name }}
          </div>
          <div class="small text-secondary">
            @{{ chirp.user.username }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="text-start">
        {{ chirp.message }}
      </div>
      <div class="text-start mt-2 mb-2 small text-secondary">
        {{ chirp.date.toLocaleTimeString('fr').substring(0, 5) + " le " + chirp.date.toLocaleDateString('fr') }}
      </div>

      <hr>

      <div class="d-flex actions">
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
import {Chirp} from "../classes/Chirp";

const props = defineProps({
  chirp: Chirp
});

</script>

<style scoped>
.chirp:hover{
  background-color: #f8f9fa;
  cursor: pointer;
  transition: background-color 0.3s ease-out 0s
}

.action{
  flex: 1;
  display: inline;
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
  display: inherit;
}

</style>