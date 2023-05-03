import type Category from "@/enum/category.enum";

export default class LibraryDto {
  id: string = "";
  requesterCategory!: Category;
  userId!: string;
  bookId!: string;
  dateBookOut?: Date;
  dateBookDue?: Date;
  dateBookReturn?: Date;
}
