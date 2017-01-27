import React from 'react';

const IngredientItem = ({name}) => (
  <li> {name} </li>
);

IngredientItem.propTypes = {
  name: React.PropTypes.string
};

export default IngredientItem;
