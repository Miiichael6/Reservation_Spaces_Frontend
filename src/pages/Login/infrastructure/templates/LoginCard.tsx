import { Button, TextField } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../../hooks/redux-toolkit";
import { setForm } from "../../../../store/slices/Auth";
import CustomCard from "../../../../components/CustomCard";

const LoginCard = () => {
  const { loginForm } = useAppSelector(state => state.Auth);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setForm({ ...loginForm, [e.target.name]: e.target.value }));
  };

  const handleLogin = () => {
    console.log(loginForm);
  }

  return (
    <CustomCard className="w-[400px] h-[300px]">
      <h1 className="text-2xl font-medium my-4 text-left">Hi, good to see you again!</h1>
      <div className="grid gap-1 grid-rows-2 grid-cols-1">
        <TextField
          name="username"
          id="User"
          label="User"
          placeholder="enter your user"
          variant="outlined"
          size="small"
          value={loginForm.username}
          onChange={handleChange}
        />
        <TextField
          name="password"
          id="Password"
          type="password"
          label="password"
          placeholder="enter your password"
          sx={{ marginTop: 0.3 }}
          variant="outlined"
          size="small"
          value={loginForm.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-end my-2">
        <Button
        onClick={handleLogin}
          variant="contained"
          sx={{
            borderRadius: 1.5,
            backgroundColor: "#E6C423",
            color: "#000000",
            fontWeight: "800",
          }}>
          Log in
        </Button>
      </div>
    </CustomCard>
  );
};

export default LoginCard;
