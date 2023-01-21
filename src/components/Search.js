import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import plus from '../assets/icons/plus.svg';
import SearchDropdown from './SearchDropdown';

const SearchButton = styled.button`
  width: 100%;
  padding: 10px 12px;
  font-weight: 300;
  font-size: 13px;
  border-radius: 2px;
  cursor: pointer;
  background: #f7f7f7;
  border: 1px solid #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const SearchContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

function Search() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const button = useRef(null);

  const handleSearchClick = (e) => {
    setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!button.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <SearchContainer>
      <SearchButton onClick={(e) => handleSearchClick(e)} ref={button}>
        Add client
        <img src={plus} alt="Plus" />
      </SearchButton>
      <SearchDropdown isOpen={isDropdownOpen}></SearchDropdown>
    </SearchContainer>
  );
}

export default Search;
