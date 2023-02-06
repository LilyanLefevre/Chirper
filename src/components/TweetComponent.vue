<template>
  <div class="tweet border border-light border-2 p-3">

    <div class="d-flex">
      <div class="profile-picture flex-shrink-0">
        <img src="/images/default_profile_400x400.png" alt="...">
      </div>

      <div class="flex-grow-1 ms-3 mb-3">
        <div class="text-start">
          <div class="fw-bold">
            {{ tweet.getUser().getCompleteName() }}
          </div>
          <div class="small text-secondary">
            @{{ tweet.getUser().getUsername() }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="text-start">
        {{ tweet.getMessage() }}
      </div>
      <div class="text-start mt-2 mb-2 small text-secondary">
        {{ tweet.getDate().toLocaleTimeString('fr').substring(0, 5) + " le " + tweet.getDate().toLocaleDateString('fr') }}
      </div>

      <hr>

      <div class="d-flex actions">
        <div class="action me-2 comment">
          <i class="bi bi-chat text-info"></i>
          <div class="number">{{ tweet.getComments() }}</div>
        </div>
        <div class="action me-2 retweet">
          <i class="bi bi-arrow-repeat text-success"></i>
          <div class="number">{{ tweet.getRetweets() }}</div>
        </div>
        <div class="action like">
          <i class="bi bi-heart text-danger"></i>
          <div class="number">{{ tweet.getLikes() }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {Tweet} from "../classes/Tweet";

const props = defineProps({
  tweet: Tweet
});

</script>

<style>
.tweet{
  width: 60vw;
}

.tweet:hover{
  background-color: #f8f9fa;
  cursor: pointer;
  transition: background-color 0.3s ease-out 0s
}

.profile-picture img{
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.actions{
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

.retweet:hover i{
  color: #04b404 !important;
}

.number{
  margin-left: 0.5vw;
  display: inherit;
}

</style>