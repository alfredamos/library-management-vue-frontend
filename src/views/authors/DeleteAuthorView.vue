<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import type AuthorDto from "@/models/authors/author.model";
import { authorUrl } from "@/urls/author.url";
import { useRoute, useRouter } from "vue-router";
import LinkButton from "@/utils/LinkButton.vue";
import DeleteItem from "@/utils/DeleteItem.vue";
import TheButton from "@/utils/TheButton.vue";
import { ref } from "vue";
import apiAuthor from "@/services/api-author.service";
import router from '../../router/index';

const id = useRoute().params.id as string;

const url = `${authorUrl}/${id}`;

const isDelete = ref<boolean>(false);
const deleteMessage = ref("");

const { resource: author } = useFetch<AuthorDto>(url);

const deleteClick = () => {
  isDelete.value = true;
  deleteMessage.value = `Do you want to delete author : ${author.value.name}?`;
};

const deleteAuthor = (value: boolean) => {
      apiAuthor.remove(id)
      .then(resp => {
            router.push("/authors")
      })
      .catch(err => console.log("error : ", err.message)
      )
};
</script>

<template>
  <delete-item
    v-if="isDelete"
    cancel-button="Cancel"
    submit-button="Delete"
    :delete-message="deleteMessage"
    delete-title="Author DeleteConfirmation!"
    @on-delete-item="deleteAuthor"
  />
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Author Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            name: <strong>{{ author?.name }}</strong>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <link-button
          link-name="Back"
          link-to="/authors"
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
