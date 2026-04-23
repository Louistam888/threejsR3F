import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  FirstPersonControls,
  OrbitControls,
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
} from "@react-three/drei";

function AnimatedBox() {
  const boxRef = useRef();
  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.005;
    boxRef.current.rotation.z += 0.005;
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[2, 2, 2]} />
      <axesHelper args={[10]} />
      <meshToonMaterial color={0x00bfff} />
    </mesh>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="canvas-container">
      <Canvas>
        <GizmoHelper alignment="bottom-right" margi={[80, 80]}>
          <GizmoViewcube />
        </GizmoHelper>

        <gridHelper args={[20, 20, 0xff22aa, 0x55cff]} />
        <axesHelper args={[10]} />
        <OrbitControls />
        <FirstPersonControls movementSpeed={1} />
        <AnimatedBox />
        <directionalLight position={[2, 5, 1]} />
      </Canvas>
    </div>
  );
}

export default App;

//1405