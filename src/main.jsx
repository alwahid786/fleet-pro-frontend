import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from './store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './theme/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
