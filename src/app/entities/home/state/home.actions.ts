import { createAction, props } from '@ngrx/store';
import { IHomePage } from './home.reducers';

export const FetchHomeData = createAction(
  '[Home] Fetch home data'
);

export const HomeDataFetched = createAction(
  '[Home] Home Data fetched',
  props<{ homeData: IHomePage }>()
);
