import React from 'react';
import { Link } from 'react-router';

export default class Children extends React.Component {
  render () {
    return (
      <div>
        <h2>Code splitting works, yeah!</h2>
        <Link to='/'>Return to home</Link>
      </div>
    );
  }
}
