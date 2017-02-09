import {
  ADD_INGREDIENT,
  EDIT_INGREDIENT
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
  case EDIT_INGREDIENT:
    return state.map((todo, index) => {
      if(index === action.id) {
        return Object.assign({}, todo, {
          name: action.name
        });
      }
      return todo;
    });

  default:
    return state;
  }
}
