<template>
  <nav class="navbar fixed-top navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../../public/images/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        Chirper
      </a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i>
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>