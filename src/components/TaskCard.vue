<template>
  <div class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4"
       :class="task.completed ? 'border-green-500' : 'border-yellow-400'">
    <h3 class="text-lg font-semibold text-gray-800">{{ task.title }}</h3>
    <p class="text-sm text-gray-600 mb-2">{{ task.description }}</p>
    <p class="text-xs text-gray-400">Vencimento: {{ task.dueDate }}</p>
    <div class="mt-3 flex justify-between items-center">
      <button class="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
              @click="edit = true">
        Editar
      </button>
      <button :class="task.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-400 hover:bg-yellow-500'"
              class="text-white text-sm px-3 py-1 rounded transition"
              @click="toggle">
        {{ task.completed ? 'Concluída' : 'Pendente' }}
      </button>
    </div>
    <EditTaskModal v-if="edit" :task="task" @close="edit = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../store/taskStore'
import type { Task } from '../types/Task'
import EditTaskModal from './EditTaskModal.vue'

const props = defineProps<{ task: Task }>()
const taskStore = useTaskStore()
const edit = ref(false)

function toggle() {
  taskStore.toggleTask(props.task.id)
}
</script>
