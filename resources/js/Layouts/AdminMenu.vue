<template>
  <v-card>
    <img src="/public/Images/logo.png" alt="logo">
    <v-tabs
      color="deep-purple accent-4"
      right
    >
      <v-btn @click="หน้าแรก">หน้าแรก</v-btn>
      <v-tab>บุคลากร</v-tab>
      <v-tab>บุคลากร(เข้าสู่ระบบ)</v-tab>

    </v-tabs>

  
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
