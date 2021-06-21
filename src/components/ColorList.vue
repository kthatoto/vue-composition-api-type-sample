<template>
  <div class="colors">
    <h2>Colors🎨</h2>
    <p>
      <label>Name:</label>
      <input type="text" v-model="params.name">
    </p>
    <p>
      <label>Color:</label>
      <input type="color" v-model="params.value">
      <span>{{ params.value }}</span>
    </p>
    <button @click="createResource">追加</button>

    <ul>
      <li v-for="color in resources" :key="color.id">
        <span class="color-preview" :style="{ backgroundColor: color.value }"></span>
        <span>{{ color.name }}</span>
        <span>(id:{{ color.id }})</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

import useResources from '@/hooks/useResources'

interface Color {
  id: number
  name: string
  value: string
}

export default defineComponent({
  setup () {
    const { params, resources, createResource } = useResources<Color>()

    return {
      params,
      resources,
      createResource
    }
  }
})
</script>

<style lang="scss" scoped>
.colors {
  ul li {
    .color-preview {
      display: inline-block;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
