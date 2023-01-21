import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ParticipantBox } from './Styled';
import { useParticipants } from '../context/ParticipantsProvider';

export const List = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  & > *:hover {
    background: #eefbef;
  }
`;

function SearchDropdown({ isOpen }) {
  const { notParticipantsList, handleAddParticipant } = useParticipants();

  return (
    <List isOpen={isOpen}>
      {notParticipantsList.map((user) => (
        <ParticipantBox key={user.id} size="small" onClick={() => handleAddParticipant(user)}>
          <img src={user.image} alt="user" />
          {user.name}
        </ParticipantBox>
      ))}
    </List>
  );
}

SearchDropdown.propTypes = {
  isOpen: PropTypes.bool,
};

export default SearchDropdown;
