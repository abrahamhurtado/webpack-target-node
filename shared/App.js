import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>My app</h1>
        <Link to='/children'>Go to children</Link>
        { this.props.children }
      </div>
    );
  }
}
