import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Provider from './hooks/provider';

import Routes from './Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Routes />
      </Provider>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
