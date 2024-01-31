
<template>
  <v-app>
  <v-row  class="d-flex justify-center align-start">

    <v-col cols="12" sm="12">
      <v-card tile>
        <v-card-title>{{ $t("nav.home") }}</v-card-title>

        <v-data-table
          :headers="headers"
          :items="todo"
          disable-pagination
          :hide-default-footer="true"
          align="center"
          min-width="1000px"
        >


          <template v-slot:[`item.actions`]="{ item }">
            <v-icon 
            small 
            class = "mr-2"
            @click="deletetodo(item.id)"
            >
              mdi-delete
            </v-icon>

            <v-icon 
            small 
            class="mr-2"
            @click="edittodo(item.id)"
            >mdi-checkbox-blank-circle-outline
            </v-icon>
          </template>
          

          <template v-slot:[`item.completed`]="{ item }">
            <v-icon small :color="getColor(item.completed)">
              {{ item.completed ? 'mdi-checkbox-marked-circle' : 'mdi-progress-clock' }}
            </v-icon>
          </template>


          <template v-slot:[`item.title`]="{ item }">
              <span :style="{ 'text-decoration': item.completed ? 'line-through' : 'none' }">{{ item.title }}</span>
          </template>

        </v-data-table>


        <div align = "right" >
          <v-btn
            class="ma-2"
              outlined
              fab
              x-small
              color="blue"
              >
                <v-icon @click="redirectToCreate">
                  mdi-plus
                </v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
  </v-app>
</template>


<script>
import DataService from "../services/DataService";



export default {
  name: "todo-list",
  data() {
    return {
      todo : [],
      title: "",
      headers: [
        { text: "Created on", value: "createdat", sortable: true },
        { text: "Priority", value: "priority", sortable: false },
        { text: "Status", value: "completed", sortable: false },
        { text: "Title", align: "start", value: "title", sortable: false },
        { text: "Actions", value: "actions", sortable: false }
      ],
    };
  },
  methods: {

    getColor(completed) {
      return completed ? 'green' : 'orange';
    },
    

    retrievetodo() {
      DataService.getAll()
        .then((response) => {
          console.log(response);
          this.todo = response.data.map(this.getDisplaytodo);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    /* Error de nao ser array:

    retrievetodo() {
  DataService.getAll()
    .then((response) => {
      this.todo = Array.isArray(response.data) ? response.data : [];
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
},


    */


    refreshList() {
      this.retrievetodo();
    },

//Noch mögliche Features, die ich einbinden wollte. Z.b. Löschen aller Todos, und löschen aller Titel, die completed sind
/*    TODO: Implement search and delete all
      removeAlltodo() {
      DataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      DataService.findByTitle(this.title)
        .then((response) => {
          this.todo = response.data.map(this.getDisplaytodo);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
*/



    edittodo(id) {
      DataService.update(id, { completed: true })
        .then(() => {
          this.refreshList();
    })
        .catch((e) => {
          console.log(e);
    });
},


   deletetodo(id) {
      DataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },



    getDisplaytodo(todo) {
  if (todo.title) {
    return {
      id: todo.id,
      title: todo.title.length > 30 ? todo.title.substr(0, 10) + "..." : todo.title,
      priority: todo.priority,
      completed: todo.completed,
      createdat: (todo.createdat || "09/25/2025").slice(0, 10),
    };
  } else {
    return {
      id: todo.id,
      title: "No title available", // Defina um valor padrão ou uma mensagem de erro aqui
      priority: todo.priority,
      completed: todo.completed,
      createdat: (todo.createdat || "09/25/2025").slice(0, 10),
    };
  }
},
   
      redirectToCreate() {  //show difference between this.$router.push and window.location.href
      this.$router.push("/create")
      //window.location.href = "http://localhost:8080/create";
    }
  },
  mounted() {
    this.retrievetodo();
  },
};
</script>

<style>
.list {
  max-width: 800px;
}
</style>
