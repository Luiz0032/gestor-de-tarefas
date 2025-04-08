<template>
  <div class="flex gap-2 items-center bg-white p-4 rounded-xl shadow mb-4">
    <input v-model="search"
           @input="taskStore.setSearchQuery(search)"
           placeholder="Buscar..."
           class="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
    <select v-model="filter"
            @change="taskStore.setFilter(filter)"
            class="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
      <option value="all">Todas</option>
      <option value="pending">Pendentes</option>
      <option value="completed">Concluídas</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../store/taskStore'

const taskStore = useTaskStore()
const filter = ref('all')
const search = ref('')
</script>
