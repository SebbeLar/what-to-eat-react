import React from 'react';
import IngredientItem from './IngredientItem';

const IngredientsList = ({ingredients}) => (
  <ul>
    {ingredients.map(function(ingredient) {
      return <IngredientItem name={ingredient.name} />;
    })}
  </ul>
);

IngredientsList.propTypes = {
  ingredients: React.PropTypes.array
};

export default IngredientsList;
