export interface IPasswordCrypto {
  hasd(password: string): Promise<string>;
}
