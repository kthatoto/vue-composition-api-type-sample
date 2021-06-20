<template>
  <div class="colors">
    <h2>Colors🎨</h2>
    <ul>
      <li v-for="color in colors" :key="color.id">
        <span class="color-preview" :style="{ backgroundColor: color.value }"></span>
        <span>{{ color.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import useResources from '@/hooks/useResources'

interface Color {
  id: number
  name: string
  value: string
}

export default defineComponent({
  setup () {
    const { resources, createResource } = useResources<Color>()

    return {
      reosurces,
      createResource
    }
  }
})
</script>
