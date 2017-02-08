import React, { Component, PropTypes } from 'react';
import IngredientItem from './IngredientItem';

class IngredientsList extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    ingredients: PropTypes.array
  };

  render() {
    const { ingredients } = this.props;
    return (
      <ul>
        {ingredients.map(function(ingredient) {
          return <IngredientItem name={ingredient.name} key={ingredient.name} />;
        })}
      </ul>
      )
  }
}

export default IngredientsList;
