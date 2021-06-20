<template>
  <div class="main">
    <h1>Vue Composition API Type Playground</h1>

    <div class="lists">
      <ColorList />
      <BookList />
      <FoodList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import ColorList from '@/components/ColorList.vue'
import BookList from '@/components/BookList.vue'
import FoodList from '@/components/FoodList.vue'

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
  components: { ColorList, BookList, FoodList }
})
</script>
