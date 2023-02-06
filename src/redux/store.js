import { configureStore } from '@reduxjs/toolkit';

// reducer
import user from './features/userSlice';
import gifs from './features/gifsSlice';
import loading from './features/loadingSlice';


export default configureStore({
    reducer: {
        user,
        gifs,
        loading
    }
});
