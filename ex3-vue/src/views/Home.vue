<template>
  <div>
    <v-row justify="center">
      <v-carousel hide-delimiters height="460">
        <v-carousel-item
          v-for="(item, index) in items"
          :key="index"
          :src="item.src"
        >
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-row justify="center" style="margin-top: 50px">
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
            class="ma-4"
            height="320"
            width="240"
            @click="toggle"
          >
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    };
  },
};
</script>
