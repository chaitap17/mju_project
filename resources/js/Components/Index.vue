<template>
<div>
  <h2>
    ข้อมูลงานวิจัย
  </h2>
  <v-row
    justify="space-around"
  >
  
  <v-text-field
        append-icon="mdi-magnify"
        class="mx-4"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field>

  </v-row></div>
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


