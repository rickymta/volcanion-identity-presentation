import { Account } from "../entities/account.entity";

export interface LoginResponseModel {
  data: Account;
  accessToken: string;
  refreshToken: string;
}
