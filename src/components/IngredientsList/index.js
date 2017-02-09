import React, { Component, PropTypes } from 'react';
import IngredientItem from './IngredientItem';

class IngredientsList extends Component {
  constructor(props) {
    super(props);

    //this.editIngredient = this.editIngredient.bind(this);
  }

  static propTypes = {
    ingredients: PropTypes.array,
    action: PropTypes.object
  }

  editIngredient(name) {
    this.props.action.toggleMode(name);
  }

  render() {
    const { ingredients } = this.props;
    const ingredientItems = ingredients.map(function(ingredient) {
      return (
        <IngredientItem
          name={ingredient.name}
          key={ingredient.name}
          edit={() => this.editIngredient(ingredient.name)}
        />
        );
    }, this);

    return (
      <ul>
        {ingredientItems}
      </ul>
      );
  }
}

export default IngredientsList;
