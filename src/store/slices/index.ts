import { combineReducers } from '@reduxjs/toolkit';
import { AuthSlice } from './Auth';

const rootReducer = combineReducers({
    Auth: AuthSlice,
});

export default rootReducer;