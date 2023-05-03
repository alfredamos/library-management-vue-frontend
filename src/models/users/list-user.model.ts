import type DepartmentDto from "../departments/department.model";
import UserDto from "./user.model";

export default class ListUserDto extends UserDto{
      department?: DepartmentDto;
}