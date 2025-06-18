import React, { memo } from 'react';
import ChatContainer from './components/ChatContainer';

const App = () => (
  <div className="App">
    <ChatContainer />
  </div>
);

export default memo(App); // Using memoization to prevent unnecessary re-renders