import React from 'react';

const IngredientItem = ({name}) => (
  <li>
    <div>
      {name}
      <button>Edit</button>
    </div>
  </li>
);

IngredientItem.propTypes = {
  name: React.PropTypes.string
};

export default IngredientItem;
