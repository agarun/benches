import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type) {
    return (e) => {
      e.preventDefault();
      this.props.updateFilter(type, parseInt(e.target.value));
    };
  }

  render() {
    return (
    <div>
      <label>
        Min seating
          <input
            type="number"
            onChange={this.handleChange('minSeating')}
          />
        </label>
        <label>
          Max seating
          <input
            type="number"
            onChange={this.handleChange('maxSeating')}
          />
        </label>
      </div>
    );
  }
}


export default FilterForm;
