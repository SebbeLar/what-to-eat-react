import React, { PropTypes } from 'react';

const IngredientItem = ({name, edit}) => (
  <li>
    <div>
      {name}
      <button onClick={edit}>Edit</button>
    </div>
  </li>
);

IngredientItem.propTypes = {
  name: React.PropTypes.string,
  edit: PropTypes.func
};

export default IngredientItem;
