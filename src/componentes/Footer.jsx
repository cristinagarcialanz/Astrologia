import React, { Component } from 'react';
import { Alert } from 'bootstrap-4-react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Alert primary>Footer</Alert>
        <Alert secondary>Copy Right</Alert>
      </div>
    )
  }
}