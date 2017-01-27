import {
  ADD_INGREDIENT
} from '../constants/ActionTypes';

const initialState = [
  {name: 'Milk', unit: 'dl', category: 'Deary'}
];

export default function ingredients(state = initialState, action) {
  switch (action.type) {

  case ADD_INGREDIENT:
    return [
      {
        name: action.text,
        unit: 'dl',
        category: 'Whatever'
      },
      ...state
    ];

  default:
    return state;
  }
}
