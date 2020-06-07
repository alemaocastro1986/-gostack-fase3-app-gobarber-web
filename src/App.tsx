import React from 'react';
import GlobalStyle from './styles/global';
import Provider from './hooks/provider';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <Provider>
        <SignIn />
      </Provider>

      <GlobalStyle />
    </>
  );
};

export default App;
