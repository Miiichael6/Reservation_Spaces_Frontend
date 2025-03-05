import CustomCard from "@/components/CustomCard";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { useAppSelector, useAppDispatch } from "@/hooks/redux-toolkit";
import { LoginActions } from "@/store/slices/Login";
import { AuthActions } from "@/store/slices/Auth";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { userRepository } from "@/shared/repository";

const LoginCard = () => {
  const { loginForm, showPassword } = useAppSelector((state) => state.Login);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      LoginActions.setState({
        loginForm: {
          ...loginForm,
          [e.target.name]: e.target.value,
        },
      })
    );
  };
  const handleLogin = async () => {
    try {
      const response = await userRepository.login(loginForm)
      localStorage.setItem("token", response.token)
      const userLogged = await userRepository.getLoggedUser();
      console.log(userLogged);
      dispatch(AuthActions.setState({ user: userLogged }))
      navigate("/")
    } catch (error: unknown) {
      if(error instanceof AxiosError) {
        const errors = Object.values(error.response?.data) as Array<string[]>
        console.log(errors);
        const messages = errors.reduce((result: string, value) => {
          const message = value.join(", ");
          result += `\n ${message}`
          return result;
        }, "")
        dispatch(LoginActions.setState({ showSnackbar: { type: "error", isOpen: true, message: messages } }))
      }
      console.log(error);
    }
  };
  const handleTogglePassword = () => {
    dispatch(LoginActions.setState({ showPassword: !showPassword }));
  };

  return (
    <CustomCard className="w-[500px] h-[450px] flex items-center justify-center">
      <div className="relative">
        <p className="text-5xl font-medium">Hi</p>
        <p className="text-4xl font-medium my-4 text-center mt-0 mb-10">
          good to see you again!
        </p>
        <div className="grid gap-1 grid-rows-2 grid-cols-1">
          <TextField
            name="email"
            id="User"
            label="User"
            placeholder="enter your user"
            variant="outlined"
            size="small"
            value={loginForm.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <TextField
            name="password"
            id="Password"
            type={showPassword ? "text" : "password"}
            label="Password"
            placeholder="enter your password"
            sx={{ marginTop: 0.3 }}
            variant="outlined"
            size="small"
            value={loginForm.password}
            onChange={handleChange}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>
        <div className="flex justify-center my-2">
          <Button
            onClick={handleLogin}
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: "#EF4444",
              color: "#FFFFFF",
              fontWeight: "300",
              boxShadow: 0,
              textTransform: "none",
              "&:hover": { boxShadow: "none" },
            }}
          >
            Log in
          </Button>
        </div>
        <div className="text-sm mt-10">
          you don't have an account yet? <Link to={"/dsadsa"} className="text-blue-600 hover:underline hover:cursor-pointer">create an account </Link>
        </div>
      </div>
    </CustomCard>
  );
};

export default LoginCard;
