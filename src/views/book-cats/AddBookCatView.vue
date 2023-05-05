<script setup lang="ts">
import type BookCatDto from '@/models/book-categories/book-category.model';
import apiBookCat from '@/services/api-book-cat.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BookCatForm from '@/components/forms/book-cats/BookCatForm.vue';

const router = useRouter()


const bookCat = ref<BookCatDto>({
      id: "",
      name: "",
})

const backToList = () => {
router.push("/categories")
}

const submitBookCat = (bookCatDto: BookCatDto) => {
      console.log("In add-bookCat, bookCat : ", bookCatDto);
      
      apiBookCat.create(bookCatDto)
      .then(resp => {
            bookCat.value = resp.data
            router.push("/bookCats")
      })
      .catch(err => console.log("error : ", err.message)
      )
}


</script>

<template>
<BookCatForm
 form-name="Create"
 :initial-book-cat="bookCat"
 @on-back-to-list="backToList"
 @on-submit-book-cat="submitBookCat"
/>
</template>