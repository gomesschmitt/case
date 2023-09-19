<template>
  <div class="d-flex justify-content-center align-items-center">
  <div class="list">
        <ListTodos />
  <!-- <div class="button">
    <AddButton />
  </div>  -->
  </div>
  
</div>
  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ListTodos from '@/components/ListTodos.vue'
//import AddButton from '@/components/AddButton.vue'
//import LocaleSwitcher from '@/components/LocaleSwitcher.vue'


export default {
  name: 'HomeView',
  components: {
    ListTodos,
}
}
</script>