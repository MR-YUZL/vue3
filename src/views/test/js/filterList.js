import {
    ref,
    computed
} from 'vue'

export default function filterList(repositories) {
    const searchQuery = ref('')
    const repositoriesMatchingSearchQuery = computed(() => {
        return repositories.value.filter(repository => {
            return repository.name.includes(searchQuery.value)
        })
    })

    return {
        searchQuery,
        repositoriesMatchingSearchQuery
    }
}