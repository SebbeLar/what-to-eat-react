import {
  TOGGLE_MODE,
  ModeFilters
} from '../constants/ActionTypes';

const { MODE_NORMAL } = ModeFilters;

export default function toggleMode(state = MODE_NORMAL, action) {
  switch (action.type) {

  case TOGGLE_MODE:
    return state;

  default:
    return state;
  }
}
