<template>
  <div>
    <div class="">
      <!-- Page Heading -->
      <header class="bg-white shadow" v-if="$slots.header">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <slot name="header" />
        </div>
      </header>

      <!-- Page Content -->
      <main>
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