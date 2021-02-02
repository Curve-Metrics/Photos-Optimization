import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import HomeOptions from './galleryPreviewComponents/homeOptions.jsx';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  max-width: 96%;
  flex-direction: column;
  justify-content: flex-start;
  object-fit: contain;
  margin: 1% auto;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
`;

const NavBar = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 15px;
`;

const HomeDetails = styled.span`
  flex: 5;
  display: flex;
  width: 100%;
  padding: 8px;
  color: #fff;
  display: inline;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.1px;
  line-height: 20.02px;
`;

const Symbol = styled.div`
  width: 24px;
  height: 24px;
  min-width: 24px;
  display: inline-block;
  vertical-align: middle;
`;

const SymbolSvg = styled.svg`
  fill: ${(props) => (props.color)};
  transition: all 0.2s ease;
  &:hover {
    fill: #007882;
  }
`;

const CloseBtn = ({ color, handleClose }) => {
  const closeBtn = <SymbolSvg className="svg" color={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z"></path></SymbolSvg>;
  return (
    <Symbol onClick={handleClose}>
      {closeBtn}
    </Symbol>
  );
};

const SideArrow = ({ color }) => {
  const sideArrow = <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" fill={color}></path></svg>;
  return (
    <Symbol>
      {sideArrow}
    </Symbol>
  );
};

const Right = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-basis: 25%;
  padding-right: .7em;
`;

const Bottom = styled.span`
  flex: 1;
  display: flex;
  height: 90%;
  object-fit: contain;
  justify-content: flex-start;
  padding-right: .7em;
`;

const PhotoWrapper = styled.div`
  flex: 1;
  object-fit: contain;
  padding-bottom: 15px;
  max-height: 90%;
  max-width: 90%;
  margin-bottom: 10px;
  display: flex;
  align-self: center;
  justify-content: space-between;
`;

const Photo = styled.img`
  min-width: 70%;
  object-fit: contain;
  padding: 0 2em;
  //trulia has the buttons stay stationary on the screen
`;

const ChangePhoto = styled.div`
  flex: 1;
  align-self: ${(props) => ((props.rotation === '180') ? 'flex-start' : 'flex-end')};
  transform: ${(props) => (`rotate(${props.rotation}deg)`)};
  display: flex;
  border-radius: 50%;
  background-color: #3b4144;
  margin: auto 0;
  padding: .7rem;
  max-height:24px;
  max-width: 24px;
  justify-content: center;
`;

const Footer = styled.span`
  display: flex;
  flex-direction: column;
  width: 75px;
  justify-content: flex-end;
  margin: 30px 0 30px 30px;
`;

const Progress = styled.div`
  color: #ffffff;
  font-weight: 700;
  line-height: 24px;
  min-width: 85px;
  font-size: 16px;
`;

const modalRoot = document.getElementById('photo-modal-root');
const appRoot = document.getElementById('gallery');

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: this.props.home.images[this.props.index],
      currentPhotoIndex: this.props.index + 1,
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.el = document.createElement('Wrapper');
  }

  componentDidMount() {
    modalRoot.setAttribute('style', 'position: fixed; top: 50%; left: 50%;transform: translate(-50%, -50%); width: 100%; height: 100%;');
    modalRoot.style['background-color'] = 'rgba(0, 0, 0, 0.85)';
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    modalRoot.style['background-color'] = 'rgba(0, 0, 0, .6)';
    modalRoot.setAttribute('style', "width: 0; height: 0;");
    // modalRoot.setAttribute('style', "width: 0; height: 0;");
  }

  handlePrevClick(event) {
    event.preventDefault();
    const { home } = this.props;
    const { currentPhotoIndex } = this.state;
    let newIndex;
    if (currentPhotoIndex <= 1) {
      newIndex = home.images.length;
    } else {
      newIndex = (currentPhotoIndex - 1);
    }
    const newPhoto = home.images[newIndex - 1];
    this.setState((state) => ({
      currentPhoto: newPhoto,
      currentPhotoIndex: newIndex,
    }));
  }

  handleNextClick(event) {
    event.preventDefault();
    const { home } = this.props;
    const { currentPhotoIndex } = this.state;
    let newIndex = (currentPhotoIndex + 1) % (home.images.length + 1);
    if (newIndex === 0) {
      newIndex = 1;
    }
    const newPhoto = home.images[newIndex - 1];
    this.setState((state) => ({
      currentPhoto: newPhoto,
      currentPhotoIndex: newIndex,
    }));
  }

  render() {
    const { currentPhoto, currentPhotoIndex } = this.state;
    const { home, saved, close, handleSaveClick } = this.props;
    const { details, images } = home;
    const { floorplan, price, address } = details;
    const { numBeds, numBaths } = floorplan;
    return ReactDOM.createPortal((
      <Wrapper>
        <NavBar>
          <HomeDetails>
            {`${address.line1} | ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 5 }).format(price)} | ${numBeds} Beds ${numBaths} Baths`}
          </HomeDetails>
          <Right>
            <HomeOptions saved={saved} color="#3b4144" handleSaveClick={handleSaveClick} />
            <CloseBtn color="#fff" handleClose={this.props.close} />
          </Right>
        </NavBar>
        <Bottom>
          <Footer>
            <Progress> {`${currentPhotoIndex} of ${images.length}`} </Progress>
          </Footer>
          <PhotoWrapper>
            <ChangePhoto onClick={this.handlePrevClick} rotation="180"><SideArrow color="#fff" /></ChangePhoto>
            <Photo src={currentPhoto} num={currentPhotoIndex} alt="photo-modal-display" />
            <ChangePhoto onClick={this.handleNextClick} rotation="0"><SideArrow color="#fff" /></ChangePhoto>
          </PhotoWrapper>
        </Bottom>
      </Wrapper>
    ), this.el);
  }
}

const PhotoModalWrapper = ({index, home, saved, showingPhotoModal, close, handleSaveClick}) => {
  if (showingPhotoModal) {
    return (
      <PhotoModal index={index} home={home} saved={saved} close={close} handleSaveClick={handleSaveClick} />
    );
  }
  return <div />;
};
export default PhotoModalWrapper;
