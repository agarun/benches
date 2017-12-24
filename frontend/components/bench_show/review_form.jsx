import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 5,
      body: '',
      bench_id: parseInt(this.props.match.params.benchId)
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.backToBench = this.backToBench.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createReview(
      Object.assign({}, this.state)
    ).then(
      () => this.backToBench()
    );
  }

  handleChange(field) {
    return (e) => (
      this.setState({
        [field]: e.target.value
      })
    );
  }

  backToBench() {
    this.props.history.push(`/benches/${this.props.benchId}`);
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
            value={this.state.body}
          />
        </label>

        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(ReviewForm);
