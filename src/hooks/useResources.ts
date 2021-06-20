import { reactive, computed } from '@vue/composition-api'

interface State<Resource> {
  resources: Resource[]
}

interface BasicResource {
  id: number
}

export default <Resource extends BasicResource>() => {
  const state = reactive<State<Resource>>({
    resources: []
  })

  const createResource = (params: Partial<Resource>) => {
    const nextId: number = params.id || (Math.max(0, ...(state.resources.map((r: Resource) => r.id))) + 1)
    state.resources.push({
      ...params,
      id: nextId
    })
  }

  return {
    resources: computed(() => state.resources),
    createResource
  }
}
