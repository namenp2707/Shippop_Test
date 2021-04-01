<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row justify="center">
          <h1>สินค้าขายดี</h1>
          <v-spacer></v-spacer>
          <p :class="`red--text`">
            <a href="/">ดูสินค้าทั้งหมด</a>
          </p>
        </v-row>

        <v-row>
          <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item v-for="n in 15" :key="n" v-slot="{active, toggle}">
              <v-card
                :color="active ? undefined : 'grey lighten-1'"
                height="320"
                width="240"
                @click="toggle"
              >
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-row>

        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'product-list',
};
</script>
