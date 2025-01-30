import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';

const pexel = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
const images = [
  { position: [4.2, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325172) },
  { position: [3.1, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325173) },
  { position: [2.0, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325174) },
  { position: [0.9, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325175) },
  { position: [-0.2, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325181) },
  { position: [-1.3, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325182) },
  { position: [-2.4, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325183) },
  { position: [-3.5, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(358574) }
];

createRoot(document.getElementById('root')).render(<App images={images} />);
