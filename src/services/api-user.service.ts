import { userUrl } from "@/urls/user.url";
import ApiService from "./api.service";
import type UserDto from "@/models/users/user.model";

class ApiUser extends ApiService<UserDto> {
  constructor() {
    super(userUrl);
  }
}

const apiUser = new ApiUser();
export default apiUser;
