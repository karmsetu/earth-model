import { Canvas } from '@react-three/fiber';
// import Box from './components/Box';
import './App.css';
import Earth from './components/Earth';
import { OrbitControls } from '@react-three/drei';
import Pointer from './components/Pointer';
import Curve from './components/Curve';

function App() {
    const greeceCoord = {
        userLat: 39.013257473656004,
        userLng: 21.973359536934538,
    };
    const indiaCoord = {
        userLat: 20.5937,
        userLng: 78.9629,
    };
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
                <Curve pos1={greeceCoord} pos2={indiaCoord} radius={1} />
                <Pointer coord={greeceCoord} radius={1} />
                <Pointer coord={indiaCoord} radius={1} />
                <OrbitControls />
            </Canvas>
        </>
    );
}

export default App;
