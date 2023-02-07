<template>
  <div>
    <div class="container">
      <Navbar/>

      <!-- Page Heading -->
      <header class="bg-white shadow" v-if="$slots.header">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <slot name="header" />
        </div>
      </header>

      <!-- Page Content -->
      <main class="mt-5">
        <slot />
      </main>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "AuthenticatedLayout",
  components: {Navbar}
}
</script>

<style scoped>

</style>