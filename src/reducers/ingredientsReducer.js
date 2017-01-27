import {
  ADD_INGREDIENT
} from '../constants/ActionTypes';

const initialState = [
  {name: 'Milk', unit: 'dl', category: 'Deary'}
];

export default function ingredients(state = initialState, action) {
  switch (action.type) {

  case ADD_INGREDIENT:
    return state;

  default:
    return state;
  }
}
