<script setup lang="ts">
import LibraryForm from '@/components/forms/libraries/LibraryForm.vue';
import type LibraryDto from '@/models/libraries/library.model';
import apiLibrary from '@/services/api-library.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Category from '../../enum/category.enum';
import { useFetch } from '@/composables/useFetch';
import { booksUrl } from '@/endpoints/book.endpoint';
import { usersUrl } from '@/endpoints/user.endpoint';
import type BookDto from '@/models/books/book.models';
import type UserDto from '@/models/users/user.model';

const router = useRouter()

const {resource: books} = useFetch<BookDto[]>(booksUrl)
const {resource: users} = useFetch<UserDto[]>(usersUrl)

const library = ref<LibraryDto>({
      id: "",
      bookId: "",
      userId: "",
      requesterCategory: Category.Student
})

const backToList = () => {
router.push("/")
}

const submitLibrary = (libraryDto: LibraryDto) => {
      console.log("In add-library, library : ", libraryDto);
      
      apiLibrary.create(libraryDto)
      .then(resp => {
            library.value = resp.data
            router.push("/")
      })
      .catch(err => console.log("error : ", err.message)
      )
}


</script>

<template>
<LibraryForm
 form-name="Create"
 :books="books"
 :initial-library="library"
 :users="users"
 @on-back-to-list="backToList"
 @on-submit-library="submitLibrary"
/>
</template>