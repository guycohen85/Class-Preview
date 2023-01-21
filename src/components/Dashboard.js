import styled from '@emotion/styled';
import dashboard from '../assets/images/dashboard.png';

const Dashboard = styled.div`
  background: #f9f9f9 url(${dashboard}) no-repeat top left;
  min-height: 100vh;
  &.inactive:after {
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
  }
`;

export default Dashboard;
