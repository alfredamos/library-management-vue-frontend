import type AuthorDto from "@/models/authors/author.model";
import ApiService from "./api.service";
import { authorUrl } from "@/urls/author.url";

class ApiAuthor extends ApiService<AuthorDto>{
      constructor() {
            super(authorUrl)
      }
}

const apiAuthor = new ApiAuthor()
export default apiAuthor