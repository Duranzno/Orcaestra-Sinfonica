import { State } from './auth.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { OrcaState } from '../reducers';

export const getAuthState = createFeatureSelector<State>('user');
export const getUser = createSelector(getAuthState, (state: State) => state.user);
export const isAdmin = createSelector(getAuthState, (state: State) => state.user.isAdmin);
export const isAuth = createSelector(getAuthState, (state: State) => {
  return state.user.nombre !== '' && typeof state.user.nombre !== 'undefined';
});
