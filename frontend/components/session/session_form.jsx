import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.errors}
        <h2>
          {
            this.props.formType === 'login' ?
            'Log in ' :
            'Sign up '
          }
          or
          &nbsp;
          {
            this.props.formType === 'login' ?
            <Link to='/signup'>Sign up</Link> :
            <Link to='/login'>Log in</Link>
          }
        </h2>
        <input type="text" onChange={this.handleChange('username')} />
        <input type="password" onChange={this.handleChange('password')} />
        <button>Submit</button>
      </form>
    );
  }
}

export default SessionForm;
