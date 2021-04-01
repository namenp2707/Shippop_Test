<template>
  <div>
    <v-row
      ><v-col>
        <h1 style="margin-top: 80px">ตระกร้าสินค้า</h1>
        <h4 style="margin-top: 50px">สินค้า</h4>
        <v-divider style="margin-top: 10px"></v-divider>
      </v-col>

      <Order></Order>
    </v-row>
  </div>
</template>

<script>
import Order from './Order.vue';
export default {
  name: 'Cart',
  components: {Order},
};
</script>

<style></style>
