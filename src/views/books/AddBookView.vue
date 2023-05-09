<script setup lang="ts">
import apiBook from '@/services/api-book.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BookForm from '@/components/forms/books/BookForm.vue';
import type BookDto from '@/models/books/book.models';
import { useFetch } from '@/composables/useFetch';
import { authorsUrl } from '@/endpoints/author.endpoint';
import type AuthorDto from '@/models/authors/author.model';
import { bookCatUrl } from '@/urls/book-category.url';
import type BookCatDto from '../../models/book-categories/book-category.model';

const router = useRouter()

const {resource: authors} = useFetch<AuthorDto[]>(authorsUrl)
const {resource: categories} = useFetch<BookCatDto>(bookCatUrl)


const book = ref<BookDto>({
      id: "",
      isbn: "",
      title: "",
      publisher: "",
      authorId: "",
      bookCatId: "",
      edition: "",
      volume: "",
      quantity: 0,
      dateOfPublication: new Date()
      
})

const backToList = () => {
router.push("/books")
}

const submitBook = (bookDto: BookDto) => {
      console.log("In add-book, book : ", bookDto);
      
      apiBook.create(bookDto)
      .then(resp => {
            book.value = resp.data
            router.push("/books")
      })
      .catch(err => console.log("error : ", err.message)
      )
}


</script>

<template>
<BookForm
v-if="authors && categories"
 form-name="Create"
 :authors="authors" 
 :initial-book="book" 
 :categories="categories"
 @on-back-to-list="backToList"
 @on-submit-book="submitBook"
/>
</template>