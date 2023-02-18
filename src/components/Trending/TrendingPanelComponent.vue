<template>
  <div class="d-inline-block align-top h-auto text-start position-relative">
    <div class="list-item">
      <a href="#">
        <img class="mt-2" src="../../../public/images/logo.svg" alt="Chirper logo" width="50" height="50">
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

  </div>

</template>

<script>
export default {
  name: "TrendingPanelComponent",
}
</script>

<style scoped>
</style>