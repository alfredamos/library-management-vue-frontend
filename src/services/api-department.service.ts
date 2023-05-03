import { departmentUrl } from "@/urls/department.url";
import ApiService from "./api.service";
import type DepartmentDto from "@/models/departments/department.model";

class ApiDepartment extends ApiService<DepartmentDto> {
  constructor() {
    super(departmentUrl);
  }
}

const apiDepartment = new ApiDepartment();
export default apiDepartment;
