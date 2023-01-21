import React from 'react';
import { Row } from './Styled';
import ParticipantRow from './ParticipantRow';
import Search from './Search';
import { useParticipants } from '../context/ParticipantsProvider';

function Participants() {
  const { participantsList } = useParticipants();

  return (
    <>
      <Row justify="space-between" margin="0 0 25px 0" grow="1">
        <h5>Participants</h5>
        <Search />
      </Row>
      {participantsList.map((participant) => (
        <ParticipantRow key={participant.id} participant={participant}></ParticipantRow>
      ))}
    </>
  );
}

export default Participants;
