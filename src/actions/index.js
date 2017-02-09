import * as type from '../constants/ActionTypes';

export const addIngredient = (text) => ({ type: type.ADD_INGREDIENT, text });
export const editIngredient = (index) => ({type: type.EDIT_INGREDIENT, index});
export const toggleMode = () => ({type: type.TOGGLE_MODE});
