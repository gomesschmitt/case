<template>
 <div id="app">
    <NavBar />
    <div class="container">
      <router-view class="centered" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
//import AddButton from "@/components/AddButton.vue"
export default {
  components: { 
    NavBar,
    //AddButton
   }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #243444;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
}


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}


.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
