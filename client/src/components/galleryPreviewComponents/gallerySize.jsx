import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  justify-content: flex-end;
  color:#ffffff;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  min-width: 50px;
  background-color: rgba(59, 65, 68, 0.8);
  border-radius: 4px;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
  padding: 3px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #869089;
  }
`;

//refactor to have symbol defined externally
const Symbol = styled.div`
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
`;

const Mountain = () => {
  const mountain = <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M6.65 20.335l4.305-4.784 3.519 3.22 5.949-7.848 4.847 8.143V6.65H6.65v13.685zm0 3.976v.959h18.62v-1.003l-5.113-8.59-5.326 7.027-3.693-3.38-4.488 4.987zM27.93 3.99v23.94H3.99V3.99h23.94zM13.965 13.3a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99z" fill="#ffffff"></path></svg>;
  return (
    <Symbol>
      {mountain}
    </Symbol>
  );
};

const GallerySize = ({ size, handleGalleryDisplay }) => (
  <Wrapper onClick={handleGalleryDisplay}>
    <Mountain /> {size}
  </Wrapper>
);

export default GallerySize;
