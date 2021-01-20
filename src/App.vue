<template>
  <v-app>
    <v-app-bar
      color="primary"
      dark
    >
      Dashboard
    </v-app-bar>
    <v-main>
      <enterprise-feed/>
    </v-main>
  </v-app>
</template>

<script>
import EnterpriseFeed from './views/EnterpriseFeed';

export default {
  name: 'App',

  components: {
    EnterpriseFeed,
  }
};
</script>
