import { CatmullRomCurve3, Color, Vector3 } from 'three';
import { latLonToCart } from '../utils/main';
// import { Coord } from './Pointer';
import { Coord } from '../types/main';
import Pointer from './Pointer';

const Curve = (prop: {
    pos1: Coord;
    pos2: Coord;
    radius: number;
    size?: number;
    color?: Color;
}) => {
    const pos1Coord = latLonToCart(
        prop.pos1.userLat,
        prop.pos1.userLng,
        prop.radius
    );
    const pos2Coord = latLonToCart(
        prop.pos2.userLat,
        prop.pos2.userLng,
        prop.radius
    );
    const v1 = new Vector3(pos1Coord.x, pos1Coord.y, pos1Coord.z);
    const v2 = new Vector3(pos2Coord.x, pos2Coord.y, pos2Coord.z);
    const points = [];
    for (let i = 0; i <= 20; i++) {
        const p = new Vector3().lerpVectors(v1, v2, i / 20);
        p.normalize();
        p.multiplyScalar(1 + 0.2 * Math.sin((Math.PI * i) / 20));
        points.push(p);
    }
    console.log(points);

    const path = new CatmullRomCurve3(points);
    return (
        <mesh>
            <tubeGeometry args={[path, 20, prop.size, 8, false]} />
            <meshBasicMaterial color={prop.color || 0x0000ff} />
            <Pointer
                coord={prop.pos1}
                radius={prop.radius}
                color={new Color(0x0001ff)}
                size={0.001}
            />
            <Pointer
                coord={prop.pos2}
                radius={prop.radius}
                color={new Color(0x0001ff)}
                size={0.001}
            />
        </mesh>
    );
};

export default Curve;
