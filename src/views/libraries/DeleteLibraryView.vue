<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import { libraryUrl } from "@/urls/library.url";
import { useRoute } from "vue-router";
import LinkButton from "@/utils/LinkButton.vue";
import DeleteItem from "@/utils/DeleteItem.vue";
import TheButton from "@/utils/TheButton.vue";
import { ref } from "vue";
import apiLibrary from "@/services/api-library.service";
import router from "../../router/index";
import type ListLibraryDto from "@/models/libraries/list-library.model";
import moment from "moment";

const id = useRoute().params.id as string;

const url = `${libraryUrl}/${id}`;

const isDelete = ref<boolean>(false);
const deleteMessage = ref("");

const { resource: library } = useFetch<ListLibraryDto>(url);

const deleteClick = () => {
  isDelete.value = true;
  deleteMessage.value = `Do you want to delete library request by : ${library.value.user?.name} for the book : ${library.value.book?.title}?`;
};

const deleteLibrary = (value: boolean) => {
  if (value) {
    apiLibrary
      .remove(id)
      .then((resp) => {
        router.push("/");
      })
      .catch((err) => console.log("error : ", err.message));
  } else {
    router.push("/");
  }
};
</script>

<template>
  <delete-item
    v-if="isDelete"
    cancel-button="Cancel"
    submit-button="Delete"
    :delete-message="deleteMessage"
    delete-title="Library DeleteConfirmation!"
    @on-delete-item="deleteLibrary"
  />
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Library Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            User : <strong>{{ library?.user?.name }}</strong>
          </li>
          <li class="list-group-item">
            Book : <strong>{{ library?.book?.title }}</strong>
          </li>
          <li class="list-group-item">
            Req. Cat. : <strong>{{ library?.requesterCategory }}</strong>
          </li>
          <li class="list-group-item">
            Date Out:
            <strong>{{
              moment(library?.dateBookOut).format("MMMM DD YYYY")
            }}</strong>
          </li>
          <li class="list-group-item">
            Date Due :
            <strong>{{
              moment(library?.dateBookDue).format("MMMM DD YYYY")
            }}</strong>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <link-button
          link-name="Back"
          link-to="/librarys"
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
