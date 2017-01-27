import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IngredientContainer from '../IngredientContainer';
import * as Actions from '../../actions';

const App = ({ingredientsReducer, second}) => (
  <div>
    <IngredientContainer ingredientsReducer={ingredientsReducer} second={second} />
  </div>
);

App.propTypes = {
  ingredientsReducer: React.PropTypes.array,
  second: React.PropTypes.object
};

const mapStateToProps = state => ({
  ingredientsReducer: state.ingredientsReducer
});

const mapDispatchToProps = dispatch => ({
  second: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
