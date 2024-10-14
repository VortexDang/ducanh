import React from 'react';

const RobotGrid = ({ position, direction }) => {
    const directions = ['N', 'E', 'S', 'W'];

    return (
        <div className="grid grid-cols-5 gap-1 mb-4">
            {[...Array(25)].map((_, index) => {
                const x = index % 5;
                const y = Math.floor(index / 5);
                return (
                    <div
                        key={index}
                        className={`w-12 h-12 border ${
                            x === position.x && y === position.y
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200'
                        } flex items-center justify-center`}
                    >
                        {x === position.x &&
                            y === position.y &&
                            directions[direction]}
                    </div>
                );
            })}
        </div>
    );
};

export default RobotGrid;
