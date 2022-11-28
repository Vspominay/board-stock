import { createAction, props } from '@ngrx/store';

import { IBillboard } from '../../../interfaces/billboard.interface';

export const FetchAllBillboards = createAction(
  '[Boards] Fetch all billboards'
);

export const AllBillboardsFetched = createAction(
  '[Boards] All billboards fetched',
  props<{ billboards: IBillboard[] }>()
);

export const GetBillboardInformation = createAction(
  '[Boards] Get billboard information',
  props<{ id: string }>()
);

export const BillboardInformationFetched = createAction(
  '[Boards] Billboard information fetched',
  props<{ billboard: IBillboard }>()
);
