import { CustomSnackBarProps } from "@/components/CustomSnackBar";
export interface iLoginState extends Record<string, unknown> {
    isAuth: boolean
    showPassword: boolean,
    showSnackbar: CustomSnackBarProps,
    loginForm: {
      email: string;
      password: string;
    };
}