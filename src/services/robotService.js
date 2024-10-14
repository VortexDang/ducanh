const directions = ['N', 'E', 'S', 'W'];

export const moveForward = (position, direction) => {
    const newPos = { ...position };
    switch (directions[direction]) {
        case 'N':
            newPos.y = Math.max(0, position.y - 1);
            break;
        case 'E':
            newPos.x = Math.min(4, position.x + 1);
            break;
        case 'S':
            newPos.y = Math.min(4, position.y + 1);
            break;
        case 'W':
            newPos.x = Math.max(0, position.x - 1);
            break;
    }
    return newPos;
};

export const rotate = (currentDirection, clockwise) => {
    return (currentDirection + (clockwise ? 1 : 3)) % 4;
};
