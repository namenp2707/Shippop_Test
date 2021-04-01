<template>
  <div style="margin-left: 50px">
    <v-container style="margin-top: 180px">
      <v-card color="#E3F2FD" width="400" height="400" tile>
        <v-container>
          <v-row justify="center">
            <v-col md="10">
              <v-row style="margin-top: 20px">
                <h1>สรุปคำสั่งซื้อ</h1>
              </v-row>
              <v-row style="margin-top: 60px">
                <h4>ยอดรวม</h4>
                <v-spacer></v-spacer>
                <h4>THB499.00</h4>
              </v-row>
              <v-row style="margin-top: 20px">
                <h4>ค่าส่ง</h4>
                <v-spacer></v-spacer>
                <h4>THB1.00</h4>
              </v-row>
              <v-row style="margin-top: 30px">
                <v-divider></v-divider>
              </v-row>
              <v-row style="margin-top: 50px">
                <h4>ยอดสุทธิ</h4>
                <v-spacer></v-spacer>
                <h4>THB500.00</h4>
              </v-row>
              <v-row style="margin-top: 50px">
                <v-btn
                  x-large
                  dark
                  color="#304FFE"
                  width="330"
                  rounded
                  v-if="isPayment()"
                >
                  <v-icon style="margin-right: 20px">mdi-lock</v-icon>
                  ชำระเงิน
                </v-btn>
                <v-btn
                  x-large
                  dark
                  color="#304FFE"
                  width="330"
                  rounded
                  v-if="isCart()"
                  @click="$router.push('/payment')"
                >
                  ไปชำระเงิน
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Order',
  methods: {
    isPayment() {
      return this.$router.history.current['path'] === '/payment';
    },
    isCart() {
      return this.$router.history.current['path'] === '/cart';
    },
  },
};
</script>

<style></style>
