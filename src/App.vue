<template>
  <v-app>
    <Header />
    <div style="height: 100%">
      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Header: () => import("./components/Header"),
  },
};
</script>

<style>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
#app {
  font-family: "NanumSquare", sans-serif;
}
span {
  font-family: "NanumSquare", sans-serif;
}
</style>
