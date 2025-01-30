import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshReflectorMaterial, useCursor } from '@react-three/drei';
import * as THREE from 'three';
import { useLocation, useRoute } from 'wouter';
import { easing } from 'maath';
import getUuid from 'uuid-by-string';

const GOLDEN_RATIO = 1.61803398875;

export const App = ({ images }) => (
  <Canvas dpr={[1, 1.5]} camera={{ fov: 35, position: [0, 2, 11] }}>
    <color attach='background' args={['#191920']} />
    <fog attach='fog' args={['#191920', 0, 15]} />
    <group position={[0, -0.5, 0]}>
      <Frames images={images} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color='#050505'
          metalness={0.5}
          mirror={1}
        />
      </mesh>
    </group>
    <Environment preset='city' />
  </Canvas>
);

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef();
  const [, params] = useRoute('/item/:id');
  const [, setLocation] = useLocation();
  const [selectedWisdom, setSelectedWisdom] = useState(null);

  useEffect(() => {
    if (params?.id) {
      setSelectedWisdom(params.id);
    } else {
      setSelectedWisdom(null);
    }
  }, [params]);

  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const wisdomName = e.object.name;
        setLocation(selectedWisdom === wisdomName ? '/' : `/item/${wisdomName}`);
      }}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => (
        <Frame key={props.url} selectedWisdom={selectedWisdom} {...props} />
      ))}
    </group>
  );
}

function Frame({ url, c = new THREE.Color(), selectedWisdom, position: initialPosition, ...props }) {
  const frame = useRef();
  const childFrame = useRef();
  const [hovered, hover] = useState(false);
  const name = getUuid(url);
  useCursor(hovered);

  const isClicked = selectedWisdom === name;
  const centerPosition = [0, 2, 8]; // Center position

  // Store initial position dynamically
  const position = useRef(new THREE.Vector3(...initialPosition));
  const targetPosition = isClicked ? centerPosition : initialPosition;

  useFrame((state, dt) => {
    easing.damp3(position.current, targetPosition, 0.4, dt); // Smooth movement
    frame.current.position.copy(position.current); // Apply position changes
  });
  return (
    <group {...props}>
      <mesh
        ref={frame}
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDEN_RATIO, 0.05]}>
        <boxGeometry />
        <meshStandardMaterial color='#024863' metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={childFrame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial color='#b7dceb' toneMapped={false} fog={false} />
        </mesh>
      </mesh>
      {/* <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDEN_RATIO, 0]} fontSize={0.025}>
        {name.split('-').join(' ')}
      </Text> */}
    </group>
  );
}
