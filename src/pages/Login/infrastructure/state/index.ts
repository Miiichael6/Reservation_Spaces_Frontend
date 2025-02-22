interface AuthState {
    isAuth: boolean,
    loginForm: {
      username: string;
      password: string;
    };
  }
  
export const initialState: AuthState = {
    isAuth: false,
    loginForm: { password: "", username: "" }
}