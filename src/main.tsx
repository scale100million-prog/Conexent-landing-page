import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': any;
    }
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
