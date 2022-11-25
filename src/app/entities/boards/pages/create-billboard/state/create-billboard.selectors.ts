import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CreateBillboardState } from './create-billboard.reducers';

export const selectCreateBillboardState = createFeatureSelector<CreateBillboardState>("createBillboard");

export const selectCurrentStep = createSelector(
  selectCreateBillboardState,
  createBillboardState => createBillboardState.steps.currentStep
);
