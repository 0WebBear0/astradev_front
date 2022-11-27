<template>
  <q-layout view="lHh Lpr lFf">
    <Header></Header>
    <Sidebar />
    <div class="container">
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Sidebar from "src/components/UI/sidebar/sidebar.vue";
import Header from "src/components/UI/header/header.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",
  components: { Header, Sidebar },
  setup() {
    const leftDrawerOpen = ref(true);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
    };
  },
});
</script>
<style lang="scss">
.container {
  padding: 20vh 3vw 0 18vw;
  @media (max-width: 768px) {
    padding: 20vh 5vw;
  }
}
</style>
