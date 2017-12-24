import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 5,
      body: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createBench(
      Object.assign({}, this.state)
    );
  }

  handleChange(field) {
    return (e) => (
      this.setState({
        [field]: e.target.value
      })
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Rating
          <input
            type="number"
            onChange={this.handleChange('rating')}
            value={this.state.rating}
          />
        </label>

        <label>
          Comment
          <textarea
            onChange={this.handleChange('body')}
          >
            {this.state.body}
          </textarea>
        </label>

        <button>Submit</button>
      </form>
    );
  }
}

export default ReviewForm;
