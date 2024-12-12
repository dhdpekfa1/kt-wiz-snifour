import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import CustomQueryClientProvider from './providers/CustomQueryClientProvider.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <CustomQueryClientProvider>
        <App />
      </CustomQueryClientProvider>
    </StrictMode>
  );
}
