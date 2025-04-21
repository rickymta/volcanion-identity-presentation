import { CommonConstants } from '../../constants/common.constants';

export class LoginModel {
  phoneNumber: string;
  password: string;
  rememberMe: boolean;
  issuer: string;

  constructor(phoneNumber: string, password: string, rememberMe: boolean) {
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.rememberMe = rememberMe;
    this.issuer = CommonConstants.ISSUER;
  }
}
