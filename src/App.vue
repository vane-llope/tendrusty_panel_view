<template>
  <navbar/>
  <router-view/>
</template>
<script>
import navbar from "./components/Navbar.vue";

export default {
  components: { navbar },
};
</script>


