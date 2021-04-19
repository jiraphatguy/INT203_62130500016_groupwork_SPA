<template>
  <div class="mb-10">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Nav.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style >
body {
  background-color: #fce7f3;
  margin-bottom: 10px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
