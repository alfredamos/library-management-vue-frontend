import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import ApiGeneral from "@/services/api-general.service";

export function useFetch<T>(url: string) {
  const resource = ref<T>(null!);
  console.log("In useFetch, url : ", url);

  onMounted(() => {
    ApiGeneral.get(url)
      .then((resp) => {
        resource.value = resp.data;
        console.log("In use-fetch, resource : ", resp.data);
        
      })
      .catch((err) => {
        
        console.log("error : ", err.message);        
      });
  });

  return { resource };
}
