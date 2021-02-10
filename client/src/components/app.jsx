import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import GalleryPreview from './galleryPreview.jsx';
import GalleryModal from './galleryModal.jsx';
import HomeInfo from './homeInfo.jsx';

const AppWrapper = styled.div`
  display: block;
  padding-top: 90px;
  max-width: 960px;
  margin: auto;
  overflow: hidden;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHome: {},
      saved: false,
    };
    const { currentHome, saved } = this.state;
    this.setState = this.setState.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  // componentDidMount() {
    // const pathway = window.location.pathname.match(/\/(\d+)\//);
    // const listingId = pathway ? Number(window.location.pathname.match(/\/(\d+)\//)[1]) : '';
  //   axios.get(`/api/listings/${listingId}`)
  //     .then(({ data }) => {
  //       const currentHome = data[Math.floor(Math.random() * data.length)];
  //       const { saved } = currentHome;
  //       this.setState(({ currentHome, saved }));
  //     })
  //     .catch((err) => {
  //       console.log('Error getting currentHome on mount: ', err);
  //     });
  // }



  componentDidMount() {
    this.getListing();
  }

  getListing() {
    // const pathway = window.location.pathname.match(/\/(\d+)\//);
    // const listingId = pathway ? Number(window.location.pathname.match(/\/(\d+)\//)[1]) : '';
    axios.get(`/api/listings/2/details`)
    .then(({ data }) => {
      const homeInfo = data.rows[0];
      const currentHome = {
        id: homeInfo.id,
        images: homeInfo.images[0].split(' '),
        tags: homeInfo.tags,
        details: {
          price: homeInfo.price,
          address: {
            line1: homeInfo.line1,
            line2:homeInfo.line2
          },
          floorplan: {
            numBeds: homeInfo.numBeds,
            numBaths: homeInfo.numBaths,
            sqft: homeInfo.sqft
          },
        }
      };
      const { saved } = currentHome;
      this.setState(({ currentHome, saved }));
    })
    .catch((err) => {
      console.log('Error getting currentHome on mount: ', err);
    });
  }


  handleSaveClick(event) {
    event.preventDefault();
    const isSaved = !this.state.saved;
    this.setState((state) => ({
      saved: isSaved,
    }));
  }

  render() {
    const { currentHome, saved, showingGallery, showingPhotoModal } = this.state;
    if (currentHome.images) {
      return (
        <AppWrapper>
          <GalleryPreview  saved={saved} currentHome={currentHome} handleSaveClick={this.handleSaveClick} />
          <HomeInfo home={currentHome} />
        </AppWrapper>
      );
    }
    return (
      <h1>
        Loading...
      </h1>
    );
  }
}

export default App;
