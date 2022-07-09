<template>
  <v-card>
    <v-parallax height="85">
      <img src="" alt="logo" srcset=""/>
    <v-row >
      <v-col class="text-right">
        <v-btn text @click="$router.push({ path: '/' })">หน้าแรก</v-btn>
        <v-btn text @click="$router.push({ path: '/personnel' })">บุคลากร</v-btn>
        <v-btn text @click="$router.push({ path: '/login' })">เข้าสู่ระบบ</v-btn>
        <v-btn text @click="$router.push({ path: '/persom' })">เข้าสู่ระบบ1</v-btn>
      </v-col>
    </v-row>
  </v-parallax>
      
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {};
  },
  async created() {},
  computed: {},
  methods: {},
};
</script>

