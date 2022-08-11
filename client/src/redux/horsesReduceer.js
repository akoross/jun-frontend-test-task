import {UPDATE} from './types';

const initialState = {
    horses: [],
  };

export const horsesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE:
          return { ...state, horses: action.horses };

        default:
          return state;
      }
}