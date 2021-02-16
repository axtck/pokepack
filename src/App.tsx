import React, { FunctionComponent } from 'react';
import Header from './components/header/Header';
import MainContent from './containers/content/MainContent';

interface AppProps { };

const App: FunctionComponent<AppProps> = () => {
  const title: string = "PokéPack";
  return (
    <>
      <Header title={title} />
      <MainContent />
    </>
  );
}

export default App;
