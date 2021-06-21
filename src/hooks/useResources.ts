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

  const setResources = (newResources: UnwrapRef<Resource[]>) => {
    resources.value = newResources
  }

  const selectedResource = computed<Resource | undefined>(() => {
    return resources.value.find((r: IResource) => r.id === selectedResourceId.value) as (Resource | undefined)
  })

  return {
    resources,
    params,
    createResource,
    setResources,
    selectedResource
  }
}
