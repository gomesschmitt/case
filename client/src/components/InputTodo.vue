
<template>
  <v-app>
  <div class="submit-form mt-3 mx-auto">
    <h2 class="headline">{{ $t("nav.about") }}</h2>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="todo.title"
          :rules="[
              (v) => !!v || 'Phillip says title is a must!',
              (v) => (v && v.length <= 100) || 'Phillip says title must not be longer than 100 characters!'
              ]"
          label="Title"
          required
        ></v-text-field>
      </v-form>

      <v-select
        v-model="todo.priority"
        :rules="[
              (v) => !!v || 'Phillip says priority is duty!'
              ]"
        :items="options"
        label="Priority"
        required
      ></v-select>

      <v-btn color="light-green" type="submit" class="mt-4" @click="saveTodo">Save</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          Successfully added!
        </v-card-title>

        <v-card-actions>
          <v-btn depressed color="blue" @click="newTodo">Another Todo</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</v-app>
</template>

<script>
import DataService from "../services/DataService";

export default {
  
  data() {
    return {
      todo: {
        id: null,
        title: "",
        priority: "",
        completed: true,
      },
      options: ['High', 'Medium', 'Low'],
      submitted: false,
    };
  },
  methods: {
    saveTodo() {
      var data = {
        title: this.todo.title,
        priority: this.todo.priority,
      };

      DataService.create(data)
        .then((response) => {
          this.todo.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log((e));
        });
    },

    newTodo() {
      this.submitted = false;
      this.todo = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
}
</style>

