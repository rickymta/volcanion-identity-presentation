import { BaseFilter } from './base.filter';

export class AccountFilter extends BaseFilter {
  fullname: string | null;
  email: string | null;
  phoneNumber: string | null;
  address: string | null;
}
