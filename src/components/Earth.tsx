import { useRef } from 'react';
import { Mesh, TextureLoader } from 'three';
import EarthTexture from '../assets/earth.jpg';
export default function Earth() {
    const earthRef = useRef<Mesh>(null!);
    return (
        <mesh ref={earthRef}>
            <sphereGeometry args={[3, 30, 30]} />
            <meshStandardMaterial
                map={new TextureLoader().load(EarthTexture)}
            />
        </mesh>
    );
}
