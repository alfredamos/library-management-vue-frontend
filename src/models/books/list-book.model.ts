import BookDto from "./book.models";
import type BookCatDto from "../book-categories/book-category.model";
import type AuthorDto from "../authors/author.model";

export default class ListBookDto extends BookDto {
  category?: BookCatDto;
  author?: AuthorDto;
}
