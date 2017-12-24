import React, { Component } from 'react';

class BenchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      description: '',
      seating: 1,
    };
  }

  handleChange(field) {
    return (e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  render() {
    return (
      <form>
        <label>
          Description
          <input
            onChange={this.handleChange('description')}
            value={this.state.description}
          />
        </label>
        <label>
          Latitude
          <input
            onChange={this.handleChange('lat')}
            value={this.state.lat}
          />
        </label>
        <label>
          Longitude
          <input
            onChange={this.handleChange('description')}
            value={this.state.lng}
          />
        </label>
        <label>
          Seating
          <input
            type="number"
            onChange={this.handleChange('seating')}
            value={this.state.seating}
          />
        </label>
        <button>Create</button>
      </form>
    );
  }

}

export default BenchForm;
