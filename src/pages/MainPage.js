import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const StyledTitle = styled.h1`
  text-align: center;
`;

function MainPage() {
  return (
    <>
      <Header />
      <StyledTitle>Book Store</StyledTitle>
    </>
  );
}

export default MainPage;
