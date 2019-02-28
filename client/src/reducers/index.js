import { combineReducers } from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  // currentStep: StepReducer,
  // pageId: PageIdReducer
});

export default rootReducer;
