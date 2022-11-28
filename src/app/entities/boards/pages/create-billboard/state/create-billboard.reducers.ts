import { createReducer, on } from '@ngrx/store';

import { KYIV_COORDINATES } from '../../../../../constants/default-coordinates.constants';
import { ICoordinates } from '../../../../../interfaces/coordinates.interface';
import { CreateBillboardsActions } from './create-billboard.actions-types';

export interface ICreateBillboard {
  title: string,
  type: string[],
  address: {
    location: string,
    coords: ICoordinates
  },
  price: number,
  description: string,
  mainImage: string,
  images: string[],
  contactData: {
    phone?: string,
    email?: string
  }
}

export interface ICreateBillboardSteps {
  currentStep: number,
}

export interface CreateBillboardState {
  billboard: ICreateBillboard,
  steps: ICreateBillboardSteps
}

const CREATE_BILLBOARD_INITIAL: CreateBillboardState = {
  billboard: {
    title: '',
    type: [],
    images: [],
    address: {
      location: '',
      coords: {
        lat: KYIV_COORDINATES.lat,
        lng: KYIV_COORDINATES.lng
      }
    },
    price: 29.99,
    mainImage: '',
    description: '',
    contactData: {
      phone: '',
      email: ''
    }
  },
  steps: {
    currentStep: 0
  }
}

export const createBillboardReducer = createReducer(
  CREATE_BILLBOARD_INITIAL,
  on(CreateBillboardsActions.setBillboardDetails, (state, { title, description, billboardType: type }) => {
    return {
      ...state,
      billboard: {
        ...state.billboard,
        title,
        description,
        type
      }
    };
  }),
  on(CreateBillboardsActions.setBillboardLocation, (state, { location, coords }) => {
    return {
      ...state,
      billboard: {
        ...state.billboard,
        address: {
          location,
          coords
        }
      }
    }
  }),
  on(CreateBillboardsActions.setBillboardPhoto, (state, { photos }) => {
    return {
      ...state,
      billboard: {
        ...state.billboard,
        mainImage: photos[0],
        images: photos.slice(1)
      }
    }
  }),
  on(CreateBillboardsActions.setBillboardFinishInformation, (state, { price, contactEmail, contactPhone }) => {
    return {
      ...state,
      billboard: {
        ...state.billboard,
        contactData: {
          phone: contactPhone,
          email: contactEmail
        }
      }
    }
  }),
  on(CreateBillboardsActions.nextStep, (state, action) => {
    return {
      ...state,
      steps: {
        currentStep: state.steps.currentStep + 1
      }
    }
  }),
  on(CreateBillboardsActions.setStepIndex, (state, action) => {
    return {
      ...state,
      steps: {
        currentStep: action.stepIndex
      }
    }
  })
)

