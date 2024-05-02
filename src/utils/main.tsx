export function latLonToCart(userLat: number, userLng: number, radius: number) {
    const lat = userLat * (Math.PI / 180);
    const lng = userLng * (Math.PI / 180);
    const z = radius * Math.cos(lat) * Math.cos(lng);
    const x = radius * Math.cos(lat) * Math.sin(lng);
    const y = radius * Math.sin(lat);
    return [x, y, z];
}
