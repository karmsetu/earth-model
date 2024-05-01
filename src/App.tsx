import { Canvas } from '@react-three/fiber';
// import Box from './components/Box';
import './App.css';
import Earth from './components/Earth';
import { OrbitControls } from '@react-three/drei';

function App() {
    return (
        <>
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    decay={0}
                    intensity={Math.PI}
                />
                <Earth />
                <OrbitControls
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI - Math.PI / 6}
                />
            </Canvas>
        </>
    );
}

export default App;
