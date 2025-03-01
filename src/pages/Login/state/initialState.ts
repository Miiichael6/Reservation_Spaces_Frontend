import { iLoginState } from "./interfaces/iLoginState";

export const initialState: iLoginState = {
    isAuth: false,
    showPassword: false,
    loginForm: { password: "", email: "" }
}