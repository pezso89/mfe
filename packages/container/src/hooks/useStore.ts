import { useStoreDispatch } from "./useStoreDispatch";
import {
  signIn,
  signOut
} from "../store/auth/authSlice";

export default function useStore() {
  const dispatch = useStoreDispatch();
  const signInUser = () => {
    dispatch(signIn());
  };
  const signOutUser = () => {
    dispatch(signOut());
  };

  return {
    signInUser,
    signOutUser
  };
}