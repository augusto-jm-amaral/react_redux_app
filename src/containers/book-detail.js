import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    if(!this.props.book){
      return (
        <div>
          <h3>No book selected!</h3>
        </div>
        )
    }

    return (
      <div>
        <h3>Details for: { this.props.book.title }</h3>
        <h3>Details for: { this.props.book.pages }</h3>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);