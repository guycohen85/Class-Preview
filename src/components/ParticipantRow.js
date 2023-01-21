import React from 'react';
import PropTypes from 'prop-types';
import { Row, ParticipantBox } from './Styled';
import CheckInButton from './CheckInButton';
import whatsapp from '../assets/icons/whatsapp.svg';
import trash from '../assets/icons/trash.svg';
import { useParticipants } from '../context/ParticipantsProvider';

function ParticipantRow({ participant }) {
  const { handleRemoveParticipant } = useParticipants();

  const handleDelete = () => {
    handleRemoveParticipant(participant);
  };

  return (
    <Row margin="0 0 15px 0">
      <ParticipantBox>
        <img src={participant.image} alt="user" />
        {participant.name}
      </ParticipantBox>
      <CheckInButton />

      <Row margin="0 0 0 auto">
        <img src={whatsapp} alt="Whatsapp" />
        <img
          style={{ marginLeft: '9px', cursor: 'pointer' }}
          src={trash}
          alt="Trash"
          onClick={handleDelete}
        />
      </Row>
    </Row>
  );
}

ParticipantRow.propTypes = {
  participant: PropTypes.object,
};

export default ParticipantRow;
