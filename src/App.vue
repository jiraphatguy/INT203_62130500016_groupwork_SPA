<template>
  <Navbar />
  <router-view />
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
  /* margin-top: 10px; */
}
</style>
