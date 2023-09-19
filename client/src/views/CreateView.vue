<template>
  <div align="center" class="about">
    <InputTodo />
  </div>
</template>

<script>
// @ is an alias to /src

import InputTodo from '@/components/InputTodo.vue'


export default {
  name: 'CreateView',
  components: {
    InputTodo
  }
}
</script>