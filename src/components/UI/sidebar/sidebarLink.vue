<template>
  <a class="sidebar_item" :href="link">
    <div v-if="icon">
      <q-icon :name="icon" />
    </div>
    <div>
      <label>{{ title }}</label>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "sidebarLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "#",
    },
    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
