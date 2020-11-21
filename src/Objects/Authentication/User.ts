import { User as UserType } from '../../Types/Authentication/User';
import { ValueObjectObject } from '../Basic/ValueObjectObject';

export class User extends ValueObjectObject<UserType>{
  constructor(user: UserType) {
    super(user);
  }
}
