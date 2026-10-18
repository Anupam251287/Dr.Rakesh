import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register PWA service worker for offline caching and home screen install on iOS & Android
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('New app updates available.');
  },
  onOfflineReady() {
    console.log('App ready for offline use.');
  },
});

createRoot(document.getElementById('root')!).render(<App />);

