<template>
  <v-app>
    <v-card color="grey lighten-4"  tile>
      <v-toolbar >

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>
        
      </v-toolbar>
    </v-card>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
