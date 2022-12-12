import React, { Component } from 'react';
import axios from 'axios';
import { Button } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    page: 1,
    query: [],
    images: [],
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      page: 1,
      query: evt.target.elements.query.value,
      images: [],
    });
    // evt.target.reset();
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      console.log('Fetch data');
    }
  }

  hendleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery image={this.state.images} />

        <Button onClick={this.hendleLoadMore} />
        <GlobalStyle />
      </div>
    );
  }
}
