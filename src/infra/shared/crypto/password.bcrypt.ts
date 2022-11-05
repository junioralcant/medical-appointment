import bcrypt from 'bcryptjs';

import { IPasswordCrypto } from './password.crypto';

export class PasswordBcrypt implements IPasswordCrypto {
  hasd(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async compare(
    password: string,
    passwordHash: string
  ): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}
