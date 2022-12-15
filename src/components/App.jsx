import React, { Component } from 'react';
// import axios from 'axios';
import { fetchGalleryWithQuery } from './Api/Api';
import { Button } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    page: 1,
    query: [],
    images: [],
    error: null,
    isLoading: false,
    isOpen: false,
    selectedImage: '',
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

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      try {
        const response = await fetchGalleryWithQuery(
          this.state.query,
          this.state.page
        );
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  hendleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  selectImage = imageUrl => {
    // console.log(imageUrl);
    this.setState({
      selectedImage: imageUrl,
      isOpen: true,
    });
  };

  modalClose = () => {
    this.setState({
      selectedImage: '',
      isOpen: false,
    });
  };

  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.modalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

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
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ImageGallery
            images={this.state.images}
            onSelect={this.selectImage}
          />
        )}

        {this.state.isOpen && (
          <Modal src={this.state.selectedImage} onClose={this.modalClose} />
        )}
        {this.state.images.length > 0 && (
          <Button onClick={this.hendleLoadMore} />
        )}
        <GlobalStyle />
      </div>
    );
  }
}
