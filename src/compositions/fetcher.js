import { api, NotFoundError } from "@/helpers/api";
import { ref } from "vue";

const useFetch = (url) => {
  const loading = ref(false);
  const data = ref([]);
  const error = ref(null);
  const fetchData = async () => {
    try {
      loading.value = true;
      data.value = await api(url);
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
