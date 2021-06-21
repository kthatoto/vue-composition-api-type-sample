<template>
  <div class="main">
    <h1>Vue Composition API Type Playground</h1>

    <div class="lists">
      <ColorList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import ColorList from '@/components/ColorList.vue'

// interface Book {
//   id: number
//   name: string
//   price: number
//   pages: number
// }
// interface Food {
//   id: number
//   name: string
//   price: number
//   calorie: number
// }

export default defineComponent({
  components: { ColorList }
})
</script>

<style lang="scss" scoped>
.main {
  padding: 50px;
  h1 {
    margin-bottom: 50px;
  }
}
</style>
