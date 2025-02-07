export interface Account {
  id: string;
  fullname: string;
  email: string;
  password: string;
  address: string;
  avatar: string;
  phoneNumber: string;
  grantPermissions: string[];
  isActived: boolean;
  isDeleted: boolean;
  createdAt: string;
}
