import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  text-align: left;
`;

const Tag = styled.div`
  border-radius: 5px;
  padding: 3px 5px;
  display: inline-block;
  font-size: 12px;
  line-height: 1.33;
  font-weight: bold;
  text-transform: uppercase;
  background-color: white;
  color: #3b4144;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
`;

const HomeDetails = ({ tags }) => {
  // should loop through all tags rather than just display the first
  if (!tags[0]) {
    return <div />;
  }
  return (
    <Wrapper>
      {
        tags.map((tag) => (
          <Tag key={tag}>
            {tag}
          </Tag>
        ))
      }
    </Wrapper>
  );
};

export default HomeDetails;
