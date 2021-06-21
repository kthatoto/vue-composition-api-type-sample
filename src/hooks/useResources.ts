import { reactive, computed, toRefs } from '@vue/composition-api'

interface Resource {
  id: number
  name: string
}

interface State {
  resources: Resource[]
  params: Partial<Resource>
  nextId: number
  selectedResourceId?: number
}

export default () => {
  const state = reactive<State>({
    resources: [],
    params: {},
    nextId: 0,
    selectedResourceId: undefined
  })

  const createResource = () => {
    const newParams = { id: ++state.nextId, name: state.params.name || '' }
    state.resources.push(newParams)
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
