<template>
  <form @submit.prevent="addNewTask" class="space-y-4 bg-white p-6 rounded-xl shadow-md">
    <input v-model="title" type="text" placeholder="Título"
           class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />

    <textarea
      v-model="description"
      placeholder="Descrição (mín. 10 / máx. 300)"
      rows="4"
      class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
      :class="{ 'border-red-500': descriptionTooShort || descriptionTooLong }"
      required
    ></textarea>

    <p class="text-sm mt-1 text-right"
       :class="descriptionTooShort || descriptionTooLong ? 'text-red-500' : 'text-gray-500'">
      {{ description.length }} / 300 caracteres
    </p>

    <input v-model="dueDate" type="date"
           class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />

    <button type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
      Adicionar Tarefa
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTaskStore } from '../store/taskStore'

const taskStore = useTaskStore()
const title = ref('')
const description = ref('')
const dueDate = ref('')

const descriptionTooShort = computed(() => description.value.length < 10)
const descriptionTooLong = computed(() => description.value.length > 300)

function addNewTask() {
  if (descriptionTooShort.value || descriptionTooLong.value) {
    alert('A descrição deve ter entre 10 e 300 caracteres.')
    return
  }

  taskStore.addTask({
    id: Date.now(),
    title: title.value,
    description: description.value,
    dueDate: dueDate.value,
    completed: false
  })

  title.value = ''
  description.value = ''
  dueDate.value = ''
}
</script>
