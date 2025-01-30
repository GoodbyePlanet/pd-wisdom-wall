import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  // Front
  // { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
  // Back
  // { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
  // { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
  // Left
  { position: [3.9, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325173) },
  { position: [2.8, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325174) },
  { position: [1.7, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325175) },
  { position: [0.6, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325181) },
  { position: [-0.5, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325182) },
  { position: [-1.6, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(325183) },
  { position: [-2.7, 0.8, 2.75], rotation: [0, 0, 0], url: pexel(358574) },
  // Right 0.5,0.6,1.7,2.8,…
  // { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
  // { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
  // { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986) }
]

createRoot(document.getElementById('root')).render(<App images={images} />)
