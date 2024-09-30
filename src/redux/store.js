import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import userDetails from "../redux/slice";  // Corrected import


const persistConfig = {
  key: 'root',  
  storage,      
  whitelist: ['userInfo'] 
};


const persistedReducer = persistReducer(persistConfig, userDetails);  


export const store = configureStore({
  reducer: {
    userInfo: persistedReducer 
  }
});


export const persistor = persistStore(store);
