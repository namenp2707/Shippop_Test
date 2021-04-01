<template>
  <div>
    <v-card width="380" height="500" tile>
      <v-container>
        <v-row justify="center">
          <v-col>
            <v-row style="margin-top: 20px" justify="center">
              <h2>สรุปคำสั่งซื้อ</h2>
            </v-row>
            <v-row style="margin-top: 20px" justify="center">
              <h4>2 สินค้าในตระกร้า</h4>
            </v-row>
            <v-row style="margin-top: 30px" justify="center">
              <v-btn
                dark
                color="#304FFE"
                width="260"
                rounded
                outlined
                @click="$router.push('/cart')"
              >
                ดูหรือแก้ไขตระกร้าของฉัน
              </v-btn>
            </v-row>
            <v-row style="margin-top: 30px">
              <v-divider></v-divider>
            </v-row>
            <v-row>
              <div></div>
            </v-row>
            <v-row style="margin-top: 30px">
              <v-divider></v-divider>
            </v-row>
            <v-row style="margin-top: 50px" justify="center" align="end">
              <h4 style="margin-right: 20px">ยอดรวม:</h4>
              <h3>THB500.00</h3>
            </v-row>
            <v-row style="margin-top: 50px" justify="center">
              <v-btn
                dark
                color="#304FFE"
                width="260"
                rounded
                @click="$router.push('/payment')"
              >
                ไปชำระเงิน
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
