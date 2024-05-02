import { Canvas } from '@react-three/fiber';
// import Box from './components/Box';
import './App.css';
import Earth from './components/Earth';
import { OrbitControls } from '@react-three/drei';
import Curve from './components/Curve';
import { countryCoordinates } from './data';
import { Color } from 'three';
import { randomHexColor } from './utils/main';

function App() {
    const curves = [];
    for (let i = 0; i < countryCoordinates.length - 1; i++) {
        const element = (
            <Curve
                pos1={countryCoordinates[i]}
                pos2={countryCoordinates[i + 1]}
                radius={1}
                size={0.001}
                color={new Color(randomHexColor())}
            />
        );
        curves.push(element);
    }
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
                {curves.map((elem) => elem)}
                {/* <Curve pos1={greeceCoord} pos2={indiaCoord} radius={1} /> */}
                <OrbitControls />
            </Canvas>
        </>
    );
}

export default App;
