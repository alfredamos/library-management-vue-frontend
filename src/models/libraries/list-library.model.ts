import type BookDto from "../books/book.models";
import type UserDto from "../users/user.model";
import LibraryDto from "./library.model";
export default class ListLibraryDto extends LibraryDto {
  book?: BookDto;
  user?: UserDto;
}
