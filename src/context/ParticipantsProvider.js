import { createContext, useContext, useState } from 'react';
import daganLev from '../assets/images/dagan-lev.png';
import edenLev from '../assets/images/eden-elian.png';
import yoniYatziv from '../assets/images/yoni-yatziv.png';
import tomLevi from '../assets/images/tom-levi.png';
import tomerCohen from '../assets/images/tomer-cohen.png';
import tomiTomi from '../assets/images/tomi-tomi.png';

const ParticipantsContext = createContext(null);

function useParticipants() {
  return useContext(ParticipantsContext);
}

function ParticipantsProvider({ children }) {
  const [participantsList, setParticipantsList] = useState([
    { id: 1, name: 'Dagan Lev', image: daganLev },
    { id: 2, name: 'Eden Elian', image: edenLev },
    { id: 3, name: 'Yoni Yatziv', image: yoniYatziv },
  ]);
  const [notParticipantsList, setNotParticipantsList] = useState([
    { id: 4, name: 'Tom Levi', image: tomLevi },
    { id: 5, name: 'Tomer Cohen', image: tomerCohen },
    { id: 6, name: 'Tomi Tomi', image: tomiTomi },
  ]);

  const handleRemoveParticipant = (participant) => {
    setParticipantsList((participants) =>
      participants.filter((currentParticipant) => currentParticipant.id !== participant.id)
    );
    setNotParticipantsList((participants) => [...participants, participant]);
  };

  const handleAddParticipant = (participant) => {
    setNotParticipantsList((notParticipants) =>
      notParticipants.filter((notParticipant) => notParticipant.id !== participant.id)
    );
    setParticipantsList((participants) => [...participants, participant]);
  };

  return (
    <ParticipantsContext.Provider
      value={{
        participantsList,
        notParticipantsList,
        handleRemoveParticipant,
        handleAddParticipant,
      }}
    >
      {children}
    </ParticipantsContext.Provider>
  );
}
export { ParticipantsProvider, useParticipants };
