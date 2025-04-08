<template>
  <div class="grid gap-4 md:grid-cols-2">
    <TaskCard
      v-for="task in taskStore.filteredTasks"
      :key="task.id"
      :task="task"
    />
  </div>
</template>

<script setup lang="ts">
import TaskCard from './TaskCard.vue'
import { useTaskStore } from '../store/taskStore'

const taskStore = useTaskStore()
taskStore.loadTasks()
</script>
