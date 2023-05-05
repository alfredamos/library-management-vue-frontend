<script setup lang="ts">
import AuthorForm from '@/components/forms/authors/AuthorForm.vue';
import type AuthorDto from '@/models/authors/author.model';
import apiAuthor from '@/services/api-author.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const author = ref<AuthorDto>({
      id: "",
      name: "",
})

const backToList = () => {
router.push("/authors")
}

const submitAuthor = (authorDto: AuthorDto) => {
      console.log("In add-author, author : ", authorDto);
      
      apiAuthor.create(authorDto)
      .then(resp => {
            author.value = resp.data
            router.push("/authors")
      })
      .catch(err => console.log("error : ", err.message)
      )
}


</script>

<template>
<AuthorForm
 form-name="Create"
 :initial-author="author"
 @on-back-to-list="backToList"
 @on-submit-author="submitAuthor"
/>
</template>