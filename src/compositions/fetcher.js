import { api, NotFoundError } from "@/helpers/api";
import { AxiosError } from "axios";
import { reactive, toRefs } from "vue";
// import { ref } from "vue"; // On va utiliser "reactive" à la place

const useFetch = (url) => {
  // Pour créer une proprieter reactive
  const state = reactive({
    loading: false,
    data: [],
    error: null,
  });
  const fetchData = async () => {
    try {
      state.loading = true;
      state.data = await api(url);
    } catch (e) {
      state.loading = false;
      if (e instanceof AxiosError || e instanceof NotFoundError) {
        state.error = "L'utilisateur n'existe pas";
      } else {
        console.error(error);
      }
    }
    state.loading = false;
  };

  return {
    // Pour transformer tous les clés des "state en reactive"
    ...toRefs(state),
    fetchData,
  };
};

export default useFetch;
