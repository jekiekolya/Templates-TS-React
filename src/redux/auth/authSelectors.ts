import { RootState } from "redux/store";

const accessToken = (state: RootState) => state.auth.accessToken;
const refreshToken = (state: RootState) => state.auth.refreshToken;
const sid = (state: RootState) => state.auth.sid;
const isLoggedIn = (state: RootState) => state.auth.isLoggedIn;
const userName = (state: RootState) => state.auth.user.username;
const userId = (state: RootState) => state.auth.user.id;
const loginLoading = (state: RootState) => state.auth.loading.logIn;
const registrationLoading = (state: RootState) =>
  state.auth.loading.registration;

export const authSelectors = {
  accessToken,
  refreshToken,
  sid,
  isLoggedIn,
  userName,
  userId,
  loginLoading,
  registrationLoading,
};
