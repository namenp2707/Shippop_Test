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
    <div style="margin-top: 30px">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Payment',
};
</script>

<style></style>
