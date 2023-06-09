<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import type ListBookDto from "@/models/books/list-book.model";
import { bookUrl } from "@/urls/book.url";
import LinkButton from "@/utils/LinkButton.vue";
import moment from "moment";
import SearchItem from "@/utils/SearchItem.vue";
import { ref, watch } from "vue";

const filteredBooks = ref<ListBookDto[]>([])

const { resource: books } = useFetch<ListBookDto[]>(bookUrl);

watch(books, () => {  
  filteredBooks.value = books.value
})

const searchHandler = (searchItem: string) => {
  filteredBooks.value = searchItem === "" ? books.value :
  books.value.filter((book) => searchCriteria(book, searchItem))
};

const searchCriteria = (book: ListBookDto, searchItem: string) => {
 return book.title.toLowerCase().includes(searchItem.toLowerCase()) || 
          book.isbn.toLowerCase().includes(searchItem.toLowerCase()) ||
          book.author?.name.toLowerCase().includes(searchItem.toLowerCase()) ||
          book.category?.name.toLowerCase().includes(searchItem.toLowerCase()) ||
          book.edition.toLowerCase().includes(searchItem.toLowerCase()) ||
          book.publisher.toLowerCase().includes(searchItem.toLowerCase()) ||
          book.volume.toLowerCase().includes(searchItem.toLowerCase()) 
}
</script>

<template>
  <SearchItem @on-search-item="searchHandler"/>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Book List</h4>
      </div>
      <div class="card-body">
        <table class="table table-hover table-responsive table-bordered">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Publisher</th>
              <th>Edition</th>
              <th>Volume</th>
              <th>Publication Date</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in filteredBooks" :key="book.id">
              <td>
                <router-link
                  class="no-text-deco"
                  :to="`/detail-book/${book.id}`"
                  >{{ book.isbn }}</router-link
                >
              </td>
              <td>{{ book.title }}</td>
              <td>{{ book.author?.name }}</td>
              <td>{{ book.category?.name }}</td>
              <td>{{ book.publisher }}</td>
              <td>{{ book.edition }}</td>
              <td>{{ book.volume }}</td>
              <td>
                {{ moment(book.dateOfPublication).format("MMMM DD YYYY") }}
              </td>
              <td>{{ book.quantity }}</td>
              <td>
                <LinkButton
                  :link-to="`/edit-book/${book.id}`"
                  link-display="outline-warning"
                  link-name="Edit"
                />
                <LinkButton
                  :link-to="`/delete-book/${book.id}`"
                  link-display="outline-danger"
                  link-name="Delete"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
        <LinkButton
          link-to="add-book"
          link-display="outline-secondary"
          link-name="Add Book"
          :is-form-control="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pado {
  padding: 10px;
}

.no-text-deco {
  text-decoration: none;
}
</style>
