import { api, NotFoundError } from "@/helpers/api";
import { ref } from "vue";

const useFetch = () => {
  const loading = ref(true);
  const data = ref([]);
  const error = ref(null);
  const fetchUsers = async () => {
    try {
      data.value = await api("https://jsonplaceholder.typicode.com/users");
    } catch (e) {
      if (e instanceof AxiosError || e instanceof NotFoundError) {
        error.value = "L'utilisateur n'existe pas";
      } else {
        console.error(error);
      }
    }
    loading.value = false;
  };
  return {
    loading,
    data,
    error,
    fetchUsers,
  };
};
export default useFetch;
