<template>
  <v-app>
    <v-card color="grey lighten-4" tile>
      <v-app-bar height="80">
        <v-container>
          <v-row justify="center">
            <v-col md="10">
              <v-row align="center">
                <v-btn
                  text
                  style="margin-right: 50px"
                  @click="$router.push('/')"
                >
                  <h1>Book</h1>
                </v-btn>
                <v-row>
                  <v-text-field
                    v-if="isSerch"
                    rounded
                    filled
                    style="margin-top: 30px"
                    append-icon="mdi-magnify"
                  >
                  </v-text-field>
                  <h3
                    v-else
                    v-for="(text, index) in texts"
                    :key="index"
                    style="margin-right: 60px"
                  >
                    {{ text.value }}
                  </h3>
                </v-row>

                <v-btn
                  style="margin-left: 40px"
                  icon
                  small
                  @click="isSerch = !isSerch"
                >
                  <v-icon v-if="isSerch">
                    mdi-close
                  </v-icon>
                  <v-icon v-else>mdi-magnify</v-icon>
                </v-btn>

                <v-badge bordered overlap content="2" style="margin-left: 20px">
                  <v-btn icon small>
                    <v-icon>
                      mdi-cart-outline
                    </v-icon>
                  </v-btn>
                </v-badge>

                <v-avatar color="indigo" size="36" style="margin-left: 40px">
                  <img
                    src="https://scontent.fbkk22-4.fna.fbcdn.net/v/t1.6435-9/148181759_2945726505650740_5346134996736708317_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FTfgblPmoWMAX9UOtCz&_nc_ht=scontent.fbkk22-4.fna&oh=f062948e483b4b58165398fdf23dc009&oe=60876367"
                    alt="Name"
                  />
                </v-avatar>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
    </v-card>

    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col md="10">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isSerch: null,
      texts: [
        {value: 'สินค้าใหม่'},
        {value: 'สินค้าขายดี'},
        {value: 'สินค้าลดราคา'},
        {value: 'สินค้าแนะนำ'},
      ],
    };
  },
};
</script>

<style></style>
