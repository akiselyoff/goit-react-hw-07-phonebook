import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsApi } from '../API/contactsApi';
import rootReducer from './reducers';

const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export default store;
