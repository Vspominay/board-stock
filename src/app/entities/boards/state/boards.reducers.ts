import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { IBillboard } from '../../../interfaces/billboard.interface';
import { BillboardsActions } from './boards.actions-types';

export interface BoardsState extends EntityState<IBillboard> {

}

export const adapter = createEntityAdapter<IBillboard>(
  { selectId: model => model.id }
);

export const initialBillboardsState = adapter.getInitialState();

export const billboardsReducer = createReducer(
  initialBillboardsState,
  on(BillboardsActions.AllBillboardsFetched, (state, action) => {
    return adapter.addMany(action.billboards, state)
  })
);

export const { selectAll } = adapter.getSelectors();
