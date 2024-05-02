export function latLonToCart(userLat: number, userLng: number, radius: number) {
    const lat = userLat * (Math.PI / 180);
    const lng = userLng * (Math.PI / 180);
    const z = radius * Math.cos(lat) * Math.cos(lng);
    const x = radius * Math.cos(lat) * Math.sin(lng);
    const y = radius * Math.sin(lat);
    return { x, y, z };
}

export function randomHexColor(): string {
    // Generate a random integer between 0 and 0xffffff (representing white)
    const randomColor = Math.floor(Math.random() * 0xffffff);

    // Convert the random number to a hexadecimal string with two-digit padding for each byte
    return `#${randomColor.toString(16).padStart(6, '0')}`;
}
