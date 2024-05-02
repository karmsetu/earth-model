import { useRef } from 'react';
import { Mesh } from 'three';
import { latLonToCart } from '../utils/main';
import { Coord } from '../types/main';

export default function Pointer(props: { coord: Coord; radius: number }) {
    const pointerRef = useRef<Mesh>(null!);
    const { x, y, z } = latLonToCart(
        props.coord.userLat,
        props.coord.userLng,
        props.radius
    );
    return (
        <mesh ref={pointerRef} position={[x, y, z]}>
            <sphereGeometry args={[0.1, 20, 20]} />
            <meshBasicMaterial color={0x00ff00} />
        </mesh>
    );
}
