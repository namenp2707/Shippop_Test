<template>
  <div>
    <v-row style="margin-top: 80px">
      <v-img
        src="https://storage.naiin.com/system/application/bookstore/resource/product/202102/521288/1000239151_front_XXXL.jpg?imgname=%E0%B8%A3%E0%B8%AA%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%81%E0%B8%87%E0%B8%AD%E0%B8%A1"
        max-width="400"
      ></v-img>
      <div style="margin-top: 30px">
        <div style="margin-left: 100px">
          <v-row>
            <h1 style="margin-bottom: 30px" class="font-weight-black">
              รสชาติของผลไม้ที่ยังไม่สุกงอม
            </h1>
          </v-row>

          <v-row style="margin-bottom: -15px">
            <h3>ผู้เขียน : โชนัมจู</h3>
          </v-row>

          <v-row style="margin-bottom: -15px">
            <h3>สำนักพิมพ์ : Piccolo</h3>
          </v-row>

          <v-row style="margin-bottom: -15px">
            <h3>หมวดหมู่ : วรรณกรรม เรื่องสั้น</h3>
          </v-row>

          <v-row style="margin-bottom: -15px">
            <h3>ประเภทของสินค้า : Books</h3>
          </v-row>

          <v-row>
            <h3>บาร์โค้ด : 9786161840488</h3>
          </v-row>

          <v-row align="center" style="margin-top: 80px">
            <h2 style="margin-right: 20px">ราคา</h2>
            <h1 style="margin-right: 20px">THB499.00</h1>
            <h2 class="text-decoration-line-through text--disabled">
              THB599.00
            </h2>
          </v-row>
          <v-row align="start" style="margin-top: 80px">
            <v-text-field
              type="number"
              filled
              value="1"
              width="50"
              style="margin-right: 50px"
            ></v-text-field>
            <v-btn
              x-large
              dark
              color="#304FFE"
              rounded
              width="200"
              style="margin-right: 50px"
            >
              Add
            </v-btn>
            <v-btn x-large dark color="#FF9100" rounded width="200">
              <v-icon style="margin-right: 20px">mdi-heart</v-icon>
              Wishlist
            </v-btn>
          </v-row>
          <v-row align="center" style="margin-top: 40px">
            <h3>แชร์:</h3>
            <v-btn fab small style="margin-left: 20px">
              <v-avatar size="42">
                <img
                  src="data:image/png;base64,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"
                />
              </v-avatar>
            </v-btn>
            <v-btn fab small style="margin-left: 20px">
              <v-avatar size="63">
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/letter+t+logo+twitter+logo+icon-1320195967837156823.png"
                />
              </v-avatar>
            </v-btn>
            <v-btn fab small style="margin-left: 20px">
              <v-avatar size="41">
                <img
                  src="https://i.pinimg.com/originals/42/4f/62/424f621770a020d114e440bf5f80ee47.png"
                />
              </v-avatar>
            </v-btn>
            <v-btn fab small style="margin-left: 20px">
              <v-avatar size="50">
                <img
                  src="https://iconarchive.com/download/i95300/dtafalonso/android-l/Google-Plus.ico"
                />
              </v-avatar>
            </v-btn>
          </v-row>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Product',
};
</script>

<style></style>
