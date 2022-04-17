import React from 'react';

import Routes from './routes/fakeRoutes'
import { AuthProvider } from "./contexts/authContext"

import './styles/global.css'

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
