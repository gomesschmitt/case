
<template>
  <v-app>
  <v-btn
      class="mx-2"
      fab
      light
      x-small
      color="green"
    >
    <v-icon light>
      mdi-plus
    </v-icon>
  </v-btn>
</v-app>
</template>

<script>
export default {
  methods: {
    redirectToCreate() {
       window.location.href = "http://localhost:8080/create";
    }
  },
};
</script>





