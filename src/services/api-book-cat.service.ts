import { bookCatUrl } from "@/urls/book-category.url";
import ApiService from "./api.service";
import type BookCatDto from "@/models/book-categories/book-category.model";

class ApiBookCat extends ApiService<BookCatDto> {
  constructor() {
    super(bookCatUrl);
  }
}

const apiBookCat = new ApiBookCat();
export default apiBookCat;
