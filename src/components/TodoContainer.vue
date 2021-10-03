<template>
  <div class="container">
    <div class="inner">
      <div class="inner-top">
        <Header />
        <ul>
          <li v-for="(todo, index) in todos" :key="`todo-${index}`">
            {{ todo.id }}
            {{ todo.time }}
            {{ todo.isCompleted }}
            {{ todo.day }}
            {{ todo.title }}
          </li>
        </ul>
        <button @click="addTodoItem('hej')">add Hej</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from './presentational/Header.vue'
import { TodoItem } from './../classes/TodoItem'
import { Watch } from 'vue-property-decorator'

@Options({
  name: 'TodoContainer',
  components: {
    Header,
  },
})
export default class TodoContainer extends Vue {
  public todos: TodoItem[] = []
  public getTodos!: (newTodos: []) => void

  public addTodoItem = (title: string): void => {
    const newTodo: TodoItem = new TodoItem()
    newTodo.title = title
    this.todos.push(newTodo)
    const temp = JSON.stringify(this.todos)
    localStorage.setItem('todos', temp)
  }

  public setTodos(): void {
    const temp = JSON.stringify(this.todos)
    localStorage.setItem('todos', temp)
  }

  mounted(): void {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos)
    }
    console.log('hallo')

    console.log(this.todos)

    //   this.addTodoItem('hejsan');
  }

  @Watch('todos', { deep: true })
  private todosUpdated() {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos)
    }
  }
}
</script>

<style></style>
