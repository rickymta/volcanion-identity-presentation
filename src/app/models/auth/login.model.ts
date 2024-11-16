import { CommonConstants } from '../../constants/common.constants';

export class LoginModel {
  loginName: string;
  password: string;
  rememberMe: boolean;
  issuer: string;

  constructor(email: string, password: string, rememberMe: boolean) {
    this.loginName = email;
    this.password = password;
    this.rememberMe = rememberMe;
    this.issuer = CommonConstants.ISSUER;
  }
}
