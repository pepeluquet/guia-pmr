import { createRoot } from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';

// Letra Barlow (pesos 400 y 500), instalada con npm: los archivos se publican junto
// con la página, así no depende de Google Fonts ni de ningún servicio externo.
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import './index.css';

createRoot(document.getElementById('root')!, {
  // Keeps caught errors off reportError(), which would raise the dev overlay.
  onCaughtError: (error, errorInfo) => {
    console.error(error, errorInfo.componentStack);
  },
}).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
