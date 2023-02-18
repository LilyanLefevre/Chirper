<template>
  <div class="d-inline-block border-start border-end" style="height: 100vh;">
    <h4 class="text-start fw-bold ps-3 pb-2 pt-2">Home</h4>
    <ChirpListComponent class="border-top" style="height: 91.7vh"/>
  </div>
</template>
<script>
import ChirpListComponent from "./ChirpListComponent.vue";

export default {
  name: 'HomeChirpList',
  components: {ChirpListComponent}
}
</script>
