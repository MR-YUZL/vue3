import {
    ref,
    onMounted,
    watch
} from 'vue'

export default function useUserRepositories(type) {
    const repositories = ref([])
    const getUserRepositories = () => {
        repositories.value = [{
            name: '哈哈哈',
            phone: '1111'
        }, {
            name: '啦啦啦',
            phone: '2222'
        }, {
            name: '嘿嘿嘿',
            phone: '3333'
        }, ]
    }

    onMounted(getUserRepositories)
    watch(type, getUserRepositories)

    return {
        repositories,
        getUserRepositories
    }
}