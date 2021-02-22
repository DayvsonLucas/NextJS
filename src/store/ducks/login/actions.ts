import { action } from 'typesafe-actions';
import { LoginTypes, Login } from './types';

export const loadRequest = (name: String, password: String) => action(LoginTypes.LOAD_REQUEST, { name, password });

export const loadSuccess = (data: Login) => action(LoginTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(LoginTypes.LOAD_FAILURE);
