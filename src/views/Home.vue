<template>
    <div class="home bg-pink-100 h-screen">
      <Navbar />
      <Content />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Nav.vue";
import Content from "@/components/Content.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Content,
  },
};
</script>
