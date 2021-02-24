import React, { useState, useEffect } from 'react';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 5px;
  width: 21rem;
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

  .search-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    align-self: center;
    background: var(--red-primary);
    border: none;
  }

  .search-button:focus {
    outline: 0;
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
      <button type="submit" className="search-button">
        <SearchRoundedIcon style={{ color: 'white' }} />
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;
