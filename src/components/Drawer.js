import React from 'react';
import styled from '@emotion/styled';
import { ParticipantsProvider } from '../context/ParticipantsProvider';
import { Row, MenuButton, IconBox } from './Styled';
import PropTypes from 'prop-types';
import Participants from './Participants';
import calendar from '../assets/icons/calendar.svg';
import pencil from '../assets/icons/pencil.svg';
import dumbbells from '../assets/icons/dumbbells.svg';
import personalTrainer from '../assets/icons/personal-trainer.svg';
import clock from '../assets/icons/clock.svg';
import fuel from '../assets/icons/fuel.svg';

const DrawerContainer = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  transform: translate(${({ isOpen }) => (isOpen ? '0,0' : '100%,0')});
  right: 0;
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  height: 100vh;
  min-width: 428px;
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  @media (max-width: 440px) {
    min-width: initial;
    width: 90%;
  }
`;
const DrawerHeader = styled.header`
  font-size: 12px;
  padding: 14px 22px;
`;
const DrawerSection = styled.section`
  padding: 30px 35px;
  text-align: ${({ align }) => (align ? align : 'center')};
  &:not(:last-child) {
    border-bottom: 1px solid #f3f3f3;
  }
  & p {
    font-size: 13px;
    font-weight: 300;
    margin: 10px 0;
  }
`;

function Drawer({ isOpen }) {
  return (
    <DrawerContainer className="Drawer" isOpen={isOpen}>
      <DrawerHeader>
        <Row>
          <MenuButton>
            <img src={pencil} alt="Pencil" />
            Edit
          </MenuButton>
          <MenuButton color="red">
            <img src={calendar} alt="Calendar" />
            Cancel Class
          </MenuButton>
        </Row>
      </DrawerHeader>
      <DrawerSection>
        <img src={dumbbells} alt="dumbbells" />
        <h3>Workout of the day</h3>
      </DrawerSection>
      <DrawerSection>
        <Row justify="space-around">
          <IconBox>
            <img src={personalTrainer} alt="personalTrainer" />
            <div>Tom A</div>
            <div>Coach</div>
          </IconBox>
          <IconBox>
            <img src={clock} alt="clock" />
            <div>16:15</div>
            <div>Start Time</div>
          </IconBox>
          <IconBox>
            <img src={fuel} alt="fuel" />
            <div>3/15</div>
            <div>Participants</div>
          </IconBox>
        </Row>
      </DrawerSection>
      <DrawerSection align="left">
        <h5>You Should Know...</h5>
        <p>Dagan & Eden which participates in the class have a debt</p>
      </DrawerSection>
      <DrawerSection align="left">
        <ParticipantsProvider>
          <Participants />
        </ParticipantsProvider>
      </DrawerSection>
    </DrawerContainer>
  );
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
};

export default Drawer;
