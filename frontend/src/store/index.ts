import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {userSliceApi} from "./reducers/userSlice";


export const store = configureStore({
    reducer: {
        [userSliceApi.reducerPath]: userSliceApi.reducer,
       },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userSliceApi.middleware,
            
        ),

});

setupListeners(store.dispatch);