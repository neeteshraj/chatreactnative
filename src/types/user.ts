export interface IUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
