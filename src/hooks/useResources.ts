import { computed, ref, UnwrapRef } from '@vue/composition-api'

interface IResource {
  id: number
  name: string
}

// interface State<Resource> {
//   resources: Resource[]
//   params: Resource
//   nextId: number
//   selectedResourceId?: number
// }

export default <Resource extends IResource>() => {
  const resources = ref<Resource[]>([])
  const params = ref<Partial<Resource>>({})
  const nextId = ref<number>(0)
  const selectedResourceId = ref<number | undefined>(undefined)

  const createResource = () => {
    params.value.id = ++nextId.value
    resources.value.push(params.value)
    params.value = {}
  }

  const setResources = (newResources: Resource[]) => {
    resources.value = newResources as UnwrapRef<Resource[]>
  }

  const selectedResource = computed<Resource | undefined>(() => {
    return resources.value.find((r: Resource) => r.id === selectedResourceId.value)
  })

  return {
    resources,
    params,
    createResource,
    setResources,
    selectedResource
  }
}
