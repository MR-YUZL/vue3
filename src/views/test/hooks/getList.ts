import { ref, onMounted, watch, Ref } from "vue";
interface A {
  typer: Ref<number>;
}

export default function useUserRepositories({ typer }: A) {
  const repositories = ref<any[]>([]);
  const typeRef = ref(typer);
  const getUserRepositories = () => {
    repositories.value = [
      {
        name: "哈哈哈",
        phone: "1111",
      },
      {
        name: "啦啦啦",
        phone: "2222",
      },
      {
        name: "嘿嘿嘿",
        phone: "3333",
      },
    ];
  };

  onMounted(getUserRepositories);
  watch(typeRef, getUserRepositories);

  return {
    repositories,
    getUserRepositories,
  };
}
