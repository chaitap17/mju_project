<template>
  <v-row
    justify="space-around"
  > ข้อมูลงานวิจัย
  
  <v-text-field
        append-icon="mdi-microphone"
        class="mx-4"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field>

  </v-row>
</template>

<script>
export default {
  data: () => ({}),
  props: {},
  methods: {
    submit(){
      alert("123")
    }
  },
};
</script>


