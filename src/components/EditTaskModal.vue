<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded shadow w-96">
      <h2 class="text-lg font-bold mb-2">Editar Tarefa</h2>
      <form @submit.prevent="updateTask" class="space-y-2">
        <input v-model="title" class="w-full p-2 border rounded" />
        <textarea v-model="description" class="w-full p-2 border rounded"></textarea>
        <input v-model="dueDate" type="date" class="w-full p-2 border rounded" />
        <div class="flex justify-end gap-2 mt-2">
          <button type="button" @click="$emit('close')" class="px-4 py-1 border rounded">Cancelar</button>
          <button type="submit" class="px-4 py-1 bg-blue-500 text-white rounded">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../store/taskStore'
import type { Task } from '../types/Task'

const props = defineProps<{ task: Task }>()
const emit = defineEmits(['close'])

const title = ref(props.task.title)
const description = ref(props.task.description)
const dueDate = ref(props.task.dueDate)
const taskStore = useTaskStore()

function updateTask() {
  taskStore.updateTask({
    ...props.task,
    title: title.value,
    description: description.value,
    dueDate: dueDate.value
  })
  emit('close')
}
</script>
