<template>
  <div class="space-y-4">
    <TaskForm />
    <TaskFilter />
    <TaskList />
  </div>
</template>

<script setup lang="ts">
import TaskForm from '../components/TaskForm.vue'
import TaskFilter from '../components/TaskFilter.vue'
import TaskList from '../components/TaskList.vue'
</script>
