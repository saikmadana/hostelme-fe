import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

const rootElem = document.getElementById('root') as HTMLElement;

const root = createRoot(rootElem);

root.render(<App />);
