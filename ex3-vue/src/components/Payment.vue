<template>
  <div>
    <h1 style="margin-top: 80px">ชำระเงิน</h1>
    <h4 style="margin-top: 50px">ที่อยู่ในการจัดส่ง</h4>
    <v-divider style="margin-top: 10px"></v-divider>
    <v-form v-model="valid" ref="form" style="margin-top: 30px">
      <v-row>
        <v-col>
          ชื่อ
          <v-text-field rounded dense small-chips solo> </v-text-field>
        </v-col>
        <v-col>
          นามสกุล
          <v-text-field rounded dense small-chips solo> </v-text-field>
        </v-col>
      </v-row>
      <v-row style="margin-top: -40px">
        <v-col>
          ประเทศ
          <v-combobox rounded dense small-chips solo> </v-combobox>
        </v-col>
      </v-row>
      <v-row style="margin-top: -40px">
        <v-col>
          ที่อยู่
          <subtitle-1 class="red--text">
            (บ้านเลขที่/หมู่บ้าน/หมู่ที่/ซอย/ถนน)
          </subtitle-1>
          <v-text-field rounded dense small-chips solo> </v-text-field>
        </v-col>
      </v-row>
      <v-row style="margin-top: -40px">
        <v-col>
          แขวง/ตำบล
          <v-text-field rounded dense small-chips solo> </v-text-field>
        </v-col>
        <v-col>
          เขต/อำเภอ
          <v-text-field rounded dense small-chips solo> </v-text-field>
        </v-col>
      </v-row>
      <v-row style="margin-top: -40px">
        <v-col>
          จังหวัด
          <v-text-field rounded dense small-chips solo> </v-text-field>
        </v-col>
        <v-col>
          รหัสไปรษณีย์
          <v-text-field rounded dense small-chips solo> </v-text-field>
        </v-col>
      </v-row>
      <v-row style="margin-top: -40px">
        <v-col>
          เบอร์ติดต่อ (กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)
          <v-text-field rounded dense small-chips solo type="tel">
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>

    <h4 style="margin-top: 50px">เลือกขนส่ง</h4>
    <v-divider style="margin-top: 10px"></v-divider>
    <v-radio-group>
      <v-card
        v-for="(transport, index) in transports"
        :key="index"
        style="margin-bottom: 20px"
        height="150"
        outlined
        class="d-flex align-center mb-6"
        ><v-container>
          <v-row justify="center">
            <v-col md="11">
              <v-row align="center">
                <v-radio></v-radio>
                <h1 v-if="transport.text !== null" style="margin-left: 50px">
                  {{ transport.text }}
                </h1>
                <v-img
                  v-if="transport.src !== null"
                  :src="transport.src"
                  max-width="250"
                  style="margin-left: 25px"
                />
                <v-spacer></v-spacer>
                <h2>THB{{ transport.price }}</h2>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-radio-group>

    <h4 style="margin-top: 50px">วิธีการชำระ</h4>
    <v-divider style="margin-top: 10px"></v-divider>
    <v-radio-group>
      <v-card
        v-for="(pay, index) in pays"
        :key="index"
        style="margin-bottom: 20px"
        height="150"
        outlined
        class="d-flex align-center mb-6"
        ><v-container>
          <v-row justify="center">
            <v-col md="11">
              <v-row align="center">
                <v-radio></v-radio>
                <v-icon style="margin-left: 50px" large color="black">
                  {{ pay.src }}
                </v-icon>
                <h1 v-if="pay.text !== null" style="margin-left: 20px">
                  {{ pay.text }}
                </h1>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: 'Payment',
  data() {
    return {
      transports: [
        {text: 'Free Shipping', src: null, price: '0.00'},
        {
          text: null,
          src:
            'https://www.igitalgeek.com/uploads/blog-post/large/post-953a96ac6fece8c7eed7c03a89ced2ca.png',
          price: '40.00',
        },
      ],
      pays: [
        {text: 'Cash', src: "mdi-cash"},
        {text: 'Credit/Debit', src: "mdi-credit-card-outline"},
      ],
    };
  },
};
</script>

<style></style>
