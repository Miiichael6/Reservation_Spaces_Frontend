import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import LoginCard from "./infrastructure/templates/LoginCard";
import CustomSnackBar from "@/components/CustomSnackBar";
import { useEffect } from "react";
// import { LoginActions } from "@/store/slices/Login";

export const LoginScreen = () => {
  const { showSnackbar } = useAppSelector(state  => state.Login)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // if(showSnackbar) {
    //   setTimeout(() => {
    //     dispatch(LoginActions.setState({ showSnackbar: { type: "error", isOpen: false, message: "" } }))
    //   }, 5000)
    // }
  }, [showSnackbar, dispatch])

  return (
    <div className="bg-red-500 flex justify-center items-center h-screen">
      <CustomSnackBar isOpen={showSnackbar.isOpen} type={showSnackbar.type} message={showSnackbar.message}/>
      <LoginCard />
    </div>
  );
};
