import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { RoundButton } from '../Button/Button';
import { devices } from '../MediaQueries';

const SearchBarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 5px;
  width: 15rem;
  height: 3.5rem;
  padding: 0 10px;
  background: var(--white);
  align-self: self-start;
  justify-self: center;
  border-radius: 30px;

  input {
    outline: none;
    border: 0;
  }

  .search-bar {
    height: 40px;
    align-self: center;
    padding-left: 10px;
  }

  .search-btn-container {
    align-self: center;
  }

  .search-button:focus {
    outline: 0;
  }

  @media ${devices.laptop} {
    width: 21rem;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <input
        className="search-bar"
        type="search"
        aria-label="search books"
        placeholder="Search"
      />
      <div className="search-btn-container">
        <RoundButton search>
          <SearchRoundedIcon style={{ color: 'white' }} />
        </RoundButton>
      </div>
    </SearchBarContainer>
  );
};

export default SearchBar;
