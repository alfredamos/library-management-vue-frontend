import type Gender from "@/enum/gender.enum";
import type UserType from "@/enum/user-type.enum";

export default class UserDto {
  id: string = "";
  name!: string;
  email!: string;
  phone!: string;
  password!: string;
  confirmPassword!: string;
  departmentId!: string;
  userType?: UserType;
  gender?: Gender;

  
}
