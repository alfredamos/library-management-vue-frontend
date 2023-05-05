<script setup lang="ts">
import LibraryForm from '@/components/forms/libraries/LibraryForm.vue';
import type LibraryDto from '@/models/libraries/library.model';
import apiLibrary from '@/services/api-library.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Category from '../../enum/category.enum';

const router = useRouter()

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
 :initial-library="library"
 @on-back-to-list="backToList"
 @on-submit-library="submitLibrary"
/>
</template>