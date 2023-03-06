import { ref } from "vue";

export function useIncrement(initialValue = 0, step = 1) {
  const count = ref(initialValue);
  const increment = () => (count.value += step);
  return [count, increment];
}
