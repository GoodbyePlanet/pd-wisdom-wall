import { createRoot } from 'react-dom/client';
import { App } from './App';

import './index.css';

const images = [
  { position: [4.2, 0.8, 2.75], rotation: [0, 0, 0], id: '325172' },
  { position: [3.1, 0.8, 2.75], rotation: [0, 0, 0], id: '325173' },
  { position: [2.0, 0.8, 2.75], rotation: [0, 0, 0], id: '325174' },
  { position: [0.9, 0.8, 2.75], rotation: [0, 0, 0], id: '325175' },
  { position: [-0.2, 0.8, 2.75], rotation: [0, 0, 0], id: '325181' },
  { position: [-1.3, 0.8, 2.75], rotation: [0, 0, 0], id: '325182' },
  { position: [-2.4, 0.8, 2.75], rotation: [0, 0, 0], id: '325183' },
  {
    position: [-3.5, 0.8, 2.75],
    rotation: [0, 0, 0],
    id: '358574',
    wisdom: 'Volja je skupa valuta',
    sage: 'Savo Sabljic'
  }
];

createRoot(document.getElementById('root')).render(<App images={images} />);
