export interface iLoginState extends Record<string, unknown> {
    isAuth: boolean
    showPassword: boolean
    loginForm: {
      email: string;
      password: string;
    };
}