import { reactive, computed, toRefs, UnwrapRef } from '@vue/composition-api'

interface State<Resource> {
  resources: Resource[]
  params: Partial<Resource>
  nextId: number
  selectedResourceId?: number
}

interface BasicResource {
  id: number
}

export default <Resource extends BasicResource>() => {
  const state = reactive<State<Resource>>({
    resources: [],
    params: {},
    nextId: 0,
    selectedResourceId: undefined
  }) as UnwrapRef<State<Resource>>

  const createResource = () => {
    state.params.id = ++state.nextId
    state.resources.push(state.params)
    state.params = {}
  }

  const setResources = (resources: Resource[]) => {
    state.resources = resources
  }

  const selectedResource = computed<Resource | undefined>(() => {
    return state.resources.find((r: Resource) => r.id === state.selectedResourceId)
  })

  return {
    ...toRefs(state),
    createResource,
    setResources,
    selectedResource
  }
}
