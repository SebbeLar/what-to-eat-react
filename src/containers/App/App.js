import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IngredientContainer from '../IngredientContainer';
import IngredientsList from '../../components/IngredientsList';
import * as Actions from '../../actions';

const App = ({ingredients, action}) => (
  <div>
    <IngredientContainer ingredients={ingredients} action={action} />
    <IngredientsList ingredients={ingredients} action={action}/>
  </div>
);

App.propTypes = {
  ingredients: React.PropTypes.array,
  action: React.PropTypes.object
};

const mapStateToProps = state => ({
  ingredients: state.ingredients
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
