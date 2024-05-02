import { useRef } from 'react';
import { Mesh, RepeatWrapping, TextureLoader } from 'three';
import EarthTexture from '../assets/earth.jpg';
export default function Earth() {
    const earthRef = useRef<Mesh>(null!);
    const texture = new TextureLoader().load(EarthTexture);
    texture.wrapS = RepeatWrapping;
    texture.offset.x = 1.5708 / (2 * Math.PI);
    return (
        <mesh ref={earthRef}>
            <sphereGeometry args={[1, 30, 30]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}
