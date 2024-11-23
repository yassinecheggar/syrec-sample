import { selectUser, selectUserLoading } from "@/store/slices/user/selectors";
import { fetchUserRequest, updateUserRequest } from "@/store/slices/user/slice";
import { User } from "@/types/user";
import { useAppDispatch, useAppSelector } from "../redux";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const loading = useAppSelector(selectUserLoading);

  const fetchUser = (userId: string) => {
    dispatch(fetchUserRequest(userId));
  };

  const updateUser = (userId: string, data: Partial<User>) => {
    dispatch(updateUserRequest({ userId, data }));
  };
  return {
    user,
    loading,
    fetchUser,
    updateUser,
  };
};
