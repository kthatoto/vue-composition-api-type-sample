<template>
  <div class="main">
    <table>
      <tr>
        <th>Colors🎨</th>
        <th>Books📚</th>
        <th>Foods🍔</th>
      </tr>
    </table>
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

<style lang="scss" scoped>
.main {
  table {
    border-collapse: collapse;
  }
}
</style>
