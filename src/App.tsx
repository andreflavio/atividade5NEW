// No arquivo App.tsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'; // Importe o ThemeProvider
import { mega } from './styles/theme'; // Importe as definições de tema
import AppRoutes from './routes'; // Importe o componente AppRoutes

const App: React.FC = () => {
  return (
    <ThemeProvider theme={mega}> {/* Use o ThemeProvider e passe o tema */}
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
