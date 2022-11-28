import { createAction, props } from '@ngrx/store';

import { EBillboardType } from '../../../../../enums/billboard-type.enum';
import { ICoordinates } from '../../../../../interfaces/coordinates.interface';

export const setBillboardDetails = createAction(
  '[Create billboard] Set billboard details',
  props<{
    title: string,
    description: string,
    billboardType: EBillboardType[]
  }>()
);

export const setBillboardLocation = createAction(
  '[Create billboard] Set billboard location',
  props<{
    location: string,
    coords: ICoordinates
  }>()
);

export const setBillboardPhoto = createAction(
  '[Create billboard] Set billboard photo',
  props<{
    photos: string[]
  }>()
);

export const setBillboardFinishInformation = createAction(
  '[Create billboard] Set billboard finish information',
  props<{
    price: number,
    contactEmail: string,
    contactPhone: string
  }>()
);

export const nextStep = createAction('[Create billboard] Next step');

export const setStepIndex = createAction(
  '[Create billboard] Set step index',
  props<{ stepIndex: number }>()
);

export const createBillboard = createAction(
  '[Create billboard] Create billboard'
);
