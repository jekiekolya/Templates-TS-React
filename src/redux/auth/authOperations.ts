import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl, token } from '../tokenSettingsAxios';
import { Notify } from 'notiflix';

// Types
import {
  AuthLoginCredentials,
  AuthLoginResponse,
  AuthRegisterCredentials,
  AuthRegisterResponse,
} from 'types';

const register = createAsyncThunk(
  'auth/register',
  async (credential: AuthRegisterCredentials, thunkAPI) => {
    const { email, password, username } = credential;

    try {
      const { data } = (await axiosBaseUrl.post('/auth/register', {
        email,
        password,
        username,
      })) as { data: AuthRegisterResponse };

      return data;
    } catch (e) {
      if (e instanceof Error) {
        Notify.failure(e.message);
        return thunkAPI.rejectWithValue(e.message);
      }

      return thunkAPI.rejectWithValue('Unknown error');
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credential: AuthLoginCredentials, thunkAPI) => {
    const { email, password } = credential;

    try {
      const { data } = (await axiosBaseUrl.post('/auth/login', {
        email,
        password,
      })) as { data: AuthLoginResponse };
      token.set(data.accessToken);

      return data;
    } catch (e) {
      if (e instanceof Error) {
        Notify.failure(e.message);
        return thunkAPI.rejectWithValue(e.message);
      }

      return thunkAPI.rejectWithValue('Unknown error');
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosBaseUrl.post('/auth/logout');
    token.unset();
  } catch (e) {
    if (e instanceof Error) {
      Notify.failure(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }

    return thunkAPI.rejectWithValue('Unknown error');
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
};

export default authOperations;
