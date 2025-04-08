import { defineStore } from 'pinia'
import type { Task } from '../types/Task'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[],
    filter: 'all',
    searchQuery: ''
  }),
  getters: {
    filteredTasks(state) {
      return state.tasks
        .filter(task => {
          if (state.filter === 'completed') return task.completed
          if (state.filter === 'pending') return !task.completed
          return true
        })
        .filter(task =>
          task.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
    }
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task)
      this.saveTasks()
    },
    toggleTask(id: number) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.completed = !task.completed
      this.saveTasks()
    },
    updateTask(updatedTask: Task) {
      const index = this.tasks.findIndex(t => t.id === updatedTask.id)
      if (index !== -1) {
        this.tasks[index] = updatedTask
        this.saveTasks()
      }
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter(t => t.id !== id)
      this.saveTasks()
    },
    setFilter(filter: string) {
      this.filter = filter
    },
    setSearchQuery(query: string) {
      this.searchQuery = query
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    loadTasks() {
      const tasks = localStorage.getItem('tasks')
      if (tasks) this.tasks = JSON.parse(tasks)
    }
  }
})
