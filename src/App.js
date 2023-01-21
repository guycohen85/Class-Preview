import { useState } from 'react';
import Drawer from './components/Drawer';
import Dashboard from './components/Dashboard';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleDrawerState = (e) => {
    setIsDrawerOpen((isDrawerOpen) => !isDrawerOpen);
  };

  return (
    <div className="App">
      <Dashboard
        className={isDrawerOpen ? 'inactive' : ''}
        onClick={(e) => handleDrawerState(e)}
      ></Dashboard>
      <Drawer isOpen={isDrawerOpen}></Drawer>
    </div>
  );
}

export default App;
