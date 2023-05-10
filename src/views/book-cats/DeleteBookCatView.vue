<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import { useRoute } from "vue-router";
import LinkButton from "@/utils/LinkButton.vue";
import DeleteItem from "@/utils/DeleteItem.vue";
import TheButton from "@/utils/TheButton.vue";
import { ref } from "vue";
import router from "../../router/index";
import apiBookCat from "@/services/api-book-cat.service";
import { bookCatUrl } from "@/urls/book-category.url";
import type BookCatDto from "@/models/book-categories/book-category.model";

const id = useRoute().params.id as string;

const url = `${bookCatUrl}/${id}`;

const isDelete = ref<boolean>(false);
const deleteMessage = ref("");

const { resource: bookCat } = useFetch<BookCatDto>(url);

const deleteClick = () => {
  isDelete.value = true;
  deleteMessage.value = `Do you want to delete bookCat : ${bookCat.value.name}?`;
};

const deleteBookCat = (value: boolean) => {
  if (value) {
    apiBookCat
      .remove(id)
      .then((resp) => {
        router.push("/categories");
      })
      .catch((err) => console.log("error : ", err.message));
  }else{
      router.push("/categories")
  }
};
</script>

<template>
  <delete-item
    v-if="isDelete"
    cancel-button="Cancel"
    submit-button="Delete"
    :delete-message="deleteMessage"
    delete-title="BookCat DeleteConfirmation!"
    @on-delete-item="deleteBookCat"
  />
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">BookCat Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            name: <strong>{{ bookCat?.name }}</strong>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <link-button
          link-name="Back"
          link-to="/bookCats"
          link-display="outline-secondary"
          :is-form-control="true"
        />
        <the-button
          button-type="button"
          button-color="outline-danger"
          button-name="Delete"
          :is-form-control="true"
          @click="deleteClick"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pado {
  padding: 10px;
}
</style>
