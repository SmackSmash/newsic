import React from 'react';
import Discogs from './pages/discogs/discogs.component';
import './app.styles.scss';

const App = props => {
  return (
    <div className="app">
      <Discogs />
    </div>
  );
};

export default App;
