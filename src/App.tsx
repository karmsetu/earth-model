import { Canvas } from '@react-three/fiber';
// import Box from './components/Box';
import './App.css';
import Earth from './components/Earth';
import { OrbitControls } from '@react-three/drei';
import Pointer from './components/Pointer';

function App() {
    const coord = {
        userLat: 39.013257473656004,
        userLng: 21.973359536934538,
        radius: 1,
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
                <Pointer coord={coord} />
                <OrbitControls />
            </Canvas>
        </>
    );
}

export default App;
