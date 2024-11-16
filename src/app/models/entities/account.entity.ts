export interface Account {
  id: string;
  fullname: string;
  email: string;
  password: string;
  address: string;
  grantPermissions: string[];
  isActived: boolean;
  isDeleted: boolean;
  createdAt: string;
}
