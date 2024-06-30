import { createAction, props } from '@ngrx/store';

export const change = createAction('[Language] Change', props<{ theme: string }>());
export const reset = createAction('[Language] Reset');
