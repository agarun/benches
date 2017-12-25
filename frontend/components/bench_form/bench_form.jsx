import React, { Component } from 'react';

class BenchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      description: '',
      image_url: '',
      seating: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBench(Object.assign({}, { bench: this.state }));
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange('lng')}
            value={this.state.lng}
          />
        </label>
        <label>
          Image URL
          <input
            onChange={this.handleChange('image_url')}
            value={this.state.image_url}
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
