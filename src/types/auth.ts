export type AuthSlice = {
  user: { username: null | string; email: null | string; id: null | string };
  accessToken: null | string;
  refreshToken: null | string;
  sid: null | string;
  isLoggedIn: boolean;
  loading: {
    register: boolean;
    logIn: boolean;
    registration: boolean;
    logOut: boolean;
  };
};

// Register
export type AuthRegisterCredentials = {
  username: string;
  email: string;
  password: string;
};

export type AuthRegisterResponse = {
  username: string;
  email: string;
  id: string;
};

// Login
export type AuthLoginCredentials = {
  email: string;
  password: string;
};

export type AuthLoginResponse = {
  accessToken: string;
  refreshToken: string;
  sid: string;

  user: {
    email: string;
    username: string;
    id: string;
  };
};
