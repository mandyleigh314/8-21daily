import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header'
import Footer from './Footer'

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default BaseLayout
