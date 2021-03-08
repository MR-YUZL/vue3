import {
    ref,
    computed
} from 'vue'

export default function filterList(repositories: any) {
    interface A {
        name: string,
        phone: string
    }
    const searchQuery = ref('')

    const repositoriesMatchingSearchQuery = computed(() => {
        return repositories.value.filter((repository: A) => {
            return repository.name.includes(searchQuery.value)
        })
    })

    return {
        searchQuery,
        repositoriesMatchingSearchQuery
    }
}