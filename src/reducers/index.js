import {
  combineReducers,
} from 'redux';
import auth from './auth';
import routes from './routes';

export default combineReducers({
  auth,
  routes,
});
