import styled from '@emotion/styled';
import { useState } from 'react';

function ToggleButton({ className }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <button
      className={`${className} ${isToggled ? 'active' : ''}`}
      onClick={() => setIsToggled(!isToggled)}
    >
      {isToggled ? 'Checked' : 'Check-In'}
    </button>
  );
}

export const CheckInButton = styled(ToggleButton)`
  color: #fff;
  background: #05c050;
  &.active {
    color: #05c050;
    background: #fff;
  }
  border: 1px solid #05c050;
  border-radius: 2px;
  padding: 6px 15px;
  font-weight: 300;
  font-size: 13px;
  cursor: pointer;
  margin: 0 10px;
`;

export default CheckInButton;
