export interface IPasswordCrypto {
  hasd(password: string): Promise<string>;
  compare(password: string, passwordHash: string): Promise<boolean>;
}
