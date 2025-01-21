export class AuthRequest {
  email: string = "";
  password: string = "";
  userName?: string = "";

  static resetPassword(auth) {
    auth.password = "";
    return auth;
  }
}
