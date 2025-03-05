import { combineReducers } from '@reduxjs/toolkit';
import { LoginSlice } from './Login';
import { AuthSlice } from './Auth';
import { DashboardSlice } from './Dashboard';
import { AdministrationSlice } from './Administration';

const rootReducer = combineReducers({
    Login: LoginSlice,
    Auth: AuthSlice,
    Dashboard: DashboardSlice,
    Administration: AdministrationSlice
});

export default rootReducer;