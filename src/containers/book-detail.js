import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book){
      return <div>Select a book to get started.</div>;
    }
    return (
      <div className='media'>
        <div className='media-left'>
          <a href='#'>
            <img className='media-object' src={this.props.book.cover} alt={this.props.book.title} />
          </a>
        </div>
        <div className='media-body'>
          <h4 className='media-heading'>{this.props.book.title}</h4>
          Pages: {this.props.book.pages}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
