import { api, NotFoundError } from "@/helpers/api";
import { ref } from "vue";

const useFetch = () => {
  const loading = ref(false);
  const data = ref([]);
  const error = ref(null);
  const fetchData = async () => {
    try {
      loading.value = true;
      data.value = await api("https://jsonplaceholder.typicode.com/users");
      console.info(data);
    } catch (e) {
      if (e instanceof AxiosError || e instanceof NotFoundError) {
        error.value = "L'utilisateur n'existe pas";
        console.log(error);
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
    fetchData,
  };
};
export default useFetch;
