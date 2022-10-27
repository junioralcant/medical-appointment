import bcrypt from 'bcryptjs';

import { IPasswordCrypto } from './password.crypto';

export class PasswordBcrypt implements IPasswordCrypto {
  hasd(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}
