import { createReducer, on } from '@ngrx/store';
import { change, reset } from '../actions/theme.actions';

const initialState = 'light';

export const themeReducer = createReducer(
    initialState,
    on(change, (state: string, { theme }) => {
        console.log({theme});
        return theme;
    }),
    on(reset, (state: string) => initialState),
);