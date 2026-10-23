import { useState } from 'react';
import type { Screen } from './types';
import Dashboard from './screens/Dashboard';
import Invoices from './screens/Invoices';
import AddItem from './screens/AddItem';
import AddTax from './screens/AddTax';
import MoreOptions from './screens/MoreOptions';
import Preview from './screens/Preview';
import Success from './screens/Success';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === 'dashboard' && <Dashboard navigateTo={navigateTo} />}
      {currentScreen === 'invoices' && <Invoices navigateTo={navigateTo} />}
      {currentScreen === 'addItem' && <AddItem navigateTo={navigateTo} />}
      {currentScreen === 'addTax' && <AddTax navigateTo={navigateTo} />}
      {currentScreen === 'moreOptions' && <MoreOptions navigateTo={navigateTo} />}
      {currentScreen === 'preview' && <Preview navigateTo={navigateTo} />}
      {currentScreen === 'success' && <Success navigateTo={navigateTo} />}
    </div>
  );
}

export default App;
