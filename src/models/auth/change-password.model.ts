class ChangePasswordDto{
      email!: string;
      oldPassword!: string;
      newPassword!: string;
      confirmPassword!: string;
}

export default ChangePasswordDto