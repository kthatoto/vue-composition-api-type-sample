<template>
  <div class="main">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const title = ref('Title')
    return {
      title
    }
  }
})
</script>
