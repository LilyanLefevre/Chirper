<template>
  <div class="d-inline-block border-start border-end" style="height: 100vh;">
    <h1 class="text-start ps-3">Home</h1>
    <ChirpListComponent class="border-top" style="height: 91.7vh"/>
  </div>
</template>
<script>
import ChirpListComponent from "../components/Chirp/ChirpListComponent.vue";

export default {
  name: 'HomeChirpList',
  components: {ChirpListComponent}
}
</script>
