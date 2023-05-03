export default class BookDto{
  id: string = "";
  title!: string;
  isbn!: string;
  edition!: string;
  publisher!: string;
  volume!: string;
  dateOfPublication!: Date;
  quantity!: number;
  bookCatId!: string;
  authorId!: string;
}
