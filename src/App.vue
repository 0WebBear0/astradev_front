<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
@import "assets/font/Montserrat/stylesheet.css";

body {
  font-family: "Montserrat", sans-serif;
}

body {
  font-family: "Montserrat";
}
* {
  margin: 0;
  border: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
button {
  cursor: pointer;
}
</style>
