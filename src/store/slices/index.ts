import { combineReducers } from '@reduxjs/toolkit';
import { LoginSlice } from './Login';
import { AuthSlice } from './Auth';
import { DashboardSlice } from './Dashboard';

const rootReducer = combineReducers({
    Login: LoginSlice,
    Auth: AuthSlice,
    Dashboard: DashboardSlice
});

export default rootReducer;