import { Account } from "../entities/account.entity";

export interface LoginResponseModel {
  account: Account;
  accessToken: string;
  refreshToken: string;
}
