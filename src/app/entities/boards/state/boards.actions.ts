import { createAction, props } from '@ngrx/store';

import { IBillboard } from '../../../interfaces/billboard.interface';

export const FetchAllBillboards = createAction(
  '[Boards] Fetch all billboards'
);

export const AllBillboardsFetched = createAction(
  '[Boards] All billboards fetched',
  props<{ billboards: IBillboard[] }>()
);