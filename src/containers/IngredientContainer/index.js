import React from 'react';

class IngredientContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    action: React.PropTypes.object,
    ingredients: React.PropTypes.array
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  checkUniqEntry() {
    const state = this.state.value.toLowerCase();
    const arr = this.props.ingredients.map(ingredient => {
      const ingredientName = ingredient.name.toLowerCase();
      if (ingredientName === state) {
        return false;
      }
      return true;
    });
    const uniq = arr.every(function(bool) {
      return bool === true;
    });
    return uniq;
  }

  handleSubmit(event) {
    if (this.checkUniqEntry()) {
      this.props.action.addIngredient(this.state.value);
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Ingredient:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default IngredientContainer;
