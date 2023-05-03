import { libraryUrl } from "@/urls/library.url";
import ApiService from "./api.service";
import type LibraryDto from "@/models/libraries/library.model";

class ApiLibrary extends ApiService<LibraryDto> {
  constructor() {
    super(libraryUrl);
  }
}

const apiLibrary = new ApiLibrary();
export default apiLibrary;
