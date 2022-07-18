import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './API/contactsApi';
import filterSlice from '../contactsAPI/filterSlice';
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
