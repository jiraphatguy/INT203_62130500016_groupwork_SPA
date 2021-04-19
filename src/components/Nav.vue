<template>
  <nav id="navbar" class="bg-pink-500 w-screen sticky top-0">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ml-12"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="hidden lg:block h-12 w-auto"
              src="../assets/izone-logo.png"
              alt="izone-logo"
            />
          </div>
          <div
            class="flex-1 items-center justify-center sm:block pl-96 ml-96 mt-1.5"
          >
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

              <router-link
                to="Home"
                class="text-white hover:bg-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page"
                >Home</router-link
              >

              <router-link
                to="/Member"
                class="text-white hover:bg-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                >Members</router-link
              >

              <router-link
                to="/Album"
                class="text-white hover:bg-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                >Albums</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
#navbar a.router-link-exact-active {
  background-color: #be185d;
}
</style>

