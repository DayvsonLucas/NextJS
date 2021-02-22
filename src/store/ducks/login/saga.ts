import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { toast } from 'react-toastify';

export function* load(action: AnyAction) {
  const success = (message: String) => toast.success(message);
  const error = (message: String) => toast.error(message);

  try {
    const { name, password } = action.payload
    const response = yield call(api.post, '/user', { name, password });

    if (response.data.name === name && response.data.password === password)
      success('Logado com sucesso')
    else
      error('Usuário ou senha invalidos')


    yield put(loadSuccess(response.data));

  } catch (err) {
    yield put(loadFailure());
    error('Error ao autenticar')
  }
}

// "name": "contato@wiser.com.br",
// "password": "P@ssw0rd"
