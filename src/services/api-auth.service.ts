import Axios from "@/interceptors/axios.interceptor"
import ChangePasswordDto from "@/models/auth/change-password.model";
import EditProfileDto from "@/models/auth/edit-profile.model";
import LoginDto from "@/models/auth/login.model";
import SignupDto from "@/models/auth/signup.model";
import authUrl from "@/urls/auth.urls";

class ApiAuth {
  static changePassword(changePasswordDto: ChangePasswordDto) {
    return Axios.patch(authUrl.changePasswordUrl, changePasswordDto);
  }

  static editProfile(editProfileDto: EditProfileDto) {
    return Axios.patch(authUrl.editProfileUrl, editProfileDto);
  }

  static login(loginDto: LoginDto) {
    return Axios.post(authUrl.loginUrl, loginDto);
  }

  static signup(signupDto: SignupDto) {
    return Axios.post(authUrl.signupUrl, signupDto);
  }
}

export default ApiAuth;
