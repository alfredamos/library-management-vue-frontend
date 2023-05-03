import Gender from "@/enum/gender.enum";
import UserType from "@/enum/user-type.enum";
import AuthUserDto from "@/models/auth/auth-user.model";
import CurrentUserDto from "@/models/auth/current-user.model";

export const initialCurrentUser: CurrentUserDto = {
  id: "",
  name: "",
  email: "",
  phone: "",
  gender: Gender.Male,
};

export const initialAuthUser: AuthUserDto = {
  user: initialCurrentUser,
  id: "",
  name: "",
  isLoggedIn: false,
  message: "Not yet Logged-in",
  userType: UserType.Customer,
};


