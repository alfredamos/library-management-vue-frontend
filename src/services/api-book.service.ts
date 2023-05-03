import { bookUrl } from "@/urls/book.url";
import ApiService from "./api.service";
import type BookDto from "@/models/books/book.models";

class ApiBook extends ApiService<BookDto> {
  constructor() {
    super(bookUrl);
  }
}

const apiBook = new ApiBook();
export default apiBook;
