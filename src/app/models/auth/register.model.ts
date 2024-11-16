export class RegisterModel {
  email: string;
  password: string;
  fullname: string;
  phoneNumber: string;
  address: string;
  birthday: string;

  constructor(email: string, password: string, fullname: string, phoneNumber: string, address: string, birthday: string) {
    this.email = email;
    this.password = password;
    this.fullname = fullname;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.birthday = birthday;
  }
}
