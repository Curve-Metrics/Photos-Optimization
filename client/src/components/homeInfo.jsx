/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;

`;

const LeftBox = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  `;

LeftBox.displayName = 'LeftBox';
const RightBox = styled.div`
  flex: 2;
  display: flex;
  /* justify-content: flex-end; */
`;
RightBox.displayName = 'RightBox';
const Address = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Map = styled.img`
  flex: 2;
  max-width: 120px;
  border: 2px solid rgb(197, 197, 197);
  border-radius: 7%;
  /* align-self: end; */
`;
Address.displayName = 'Address';
const Floorplan = styled.span`
  flex: 1;
  display: flex;
  color: #3b4144;
  letter-spacing: -0.1px;
  line-height: 24px;
  padding-top: 20px;
  justify-content: flex-start;
`;
Floorplan.displayName = 'Floorplan';
const LineOne = styled.span`
  flex: 1;
  color:#3b4144;
  display: inline;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.1px;
  line-height: 32px;
`;
LineOne.displayName = 'LineOne';
const LineTwo = styled.span`
  flex: 1;
  color: #3b4144;
  display: inline;
  letter-spacing: -0.1px;
  font-size: 16px;
  line-height: 24px;
`;
LineTwo.displayName = 'LineTwo';
//refactor to have symbol defined externally
const Symbol = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
`;

const FloorplanItem = styled.div`
  padding-right: 2em;
  font-size: 16px;
`;
const Bed = () => {
  const bed = <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>;
  return (
    <Symbol>
      {bed}
    </Symbol>
  );
};
const Bath = () => {
  const bath = <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>;
  return (
    <Symbol>
      {bath}
    </Symbol>
  );
};
const Triangle = () => {
  const triangle = <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>;
  return (
    <Symbol>
      {triangle}
    </Symbol>
  );
};

const HomeInfo = ({ home }) => {
  const { details } = home;
  const { floorplan, price, address } = details;
  const { numBeds, numBaths, sqft } = floorplan;
  const currentDate = new Date();
  return (
    <Wrapper>
      <LeftBox>
        <Address className="address">
          <LineOne>
            {address.line1}
          </LineOne>
          <LineTwo>
            {address.line2}
          </LineTwo>
        </Address>
        <Floorplan>
          <FloorplanItem>
            <Bed /> {numBeds} Beds
          </FloorplanItem>
          <FloorplanItem>
            <Bath /> {numBaths} Baths
          </FloorplanItem>
          <FloorplanItem>
            <Triangle /> {sqft} sqft
          </FloorplanItem>
        </Floorplan>
      </LeftBox>
      <RightBox>
        <div className="price right">
          <LineOne>
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 5 }).format(price)}
          </LineOne>
        </div>
      </RightBox>
      <Map className="home-map" src="https://fec-house-photos.s3-us-west-1.amazonaws.com/Screen+Shot+2021-01-27+at+5.09.23+PM.png" alt="minimap" width="120" height="120" />
    </Wrapper>
  );
};

export default HomeInfo;
