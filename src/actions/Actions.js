import store from '../store/Store';
import { Action } from './ActionType';
import {
  Services
} from '../services/Services';

// Example action
export const loadConfig = () => Services.loadConfig().then(res => {
  if (res) {
    store.dispatch({
      type: Action.ACTION_LOAD_CONFIG_FINISH,
      data: res,
    });
  }
  return res;
});