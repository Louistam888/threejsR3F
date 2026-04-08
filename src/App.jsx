import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { div } from "three/tsl";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="canvas-container">
      <Canvas>
        <mesh
          position={[-2, 2, -1]}
          rotation={[0, 0, Math.PI]}
          scale={[2, 0.5, 2]}
        >
          {/* <sphereGeometry args={[3, 80, 80]} /> */}
          {/* <boxGeometry args={[2, 3, 2]} /> */}
          <torusKnotGeometry args={[1.7, 0.3, 256, 256]} />
          <meshToonMaterial color={0x00bfff} />
          <directionalLight position={[2, 5, 1]} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
//8:25