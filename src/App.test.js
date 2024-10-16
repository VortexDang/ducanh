import { render, screen, fireEvent, act } from '@testing-library/react';
import RobotControl from 'components/RobotControl';

describe('RobotControl Component', () => {
    test('Initializes with correct position and direction', () => {
        render(<RobotControl />);
        const positionElement = screen.getByText(
            /Position: \(0, 0\) | Direction: North/i
        );
        expect(positionElement).toBeInTheDocument();
    });

    test('Moves forward from initial position', () => {
        render(<RobotControl />);

        const moveForwardButton = screen.getByLabelText(/Move forward/i);
        act(() => {
            fireEvent.click(moveForwardButton);
        });

        const updatedPosition = screen.getByText(
            /Position: \(0, 1\) | Direction: North/i
        );
        expect(updatedPosition).toBeInTheDocument();
    });

    test('Rotates clockwise and updates direction', () => {
        render(<RobotControl />);

        const rotateClockwiseButton =
            screen.getByLabelText(/Rotate clockwise/i);
        act(() => {
            fireEvent.click(rotateClockwiseButton);
        });

        const updatedDirection = screen.getByText(
            /Position: \(0, 0\) | Direction: East/i
        );
        expect(updatedDirection).toBeInTheDocument();
    });

    test('Rotates counterclockwise and updates direction', () => {
        render(<RobotControl />);

        const rotateCounterClockwiseButton = screen.getByLabelText(
            /Rotate counterclockwise/i
        );
        act(() => {
            fireEvent.click(rotateCounterClockwiseButton);
        });

        const updatedDirection = screen.getByText(
            /Position: \(0, 0\) | Direction: West/i
        );
        expect(updatedDirection).toBeInTheDocument();
    });

    test('Moves forward while facing East', () => {
        render(<RobotControl />);

        const rotateClockwiseButton =
            screen.getByLabelText(/Rotate clockwise/i);
        act(() => {
            fireEvent.click(rotateClockwiseButton); // Rotate to East
        });

        const moveForwardButton = screen.getByLabelText(/Move forward/i);
        act(() => {
            fireEvent.click(moveForwardButton);
        });

        const updatedPosition = screen.getByText(
            /Position: \(1, 0\) | Direction: East/i
        );
        expect(updatedPosition).toBeInTheDocument();
    });

    test('Does not move forward out of bounds when facing North', () => {
        render(<RobotControl />);

        const moveForwardButton = screen.getByLabelText(/Move forward/i);
        act(() => {
            fireEvent.click(moveForwardButton); // Tries to move out of bounds
        });

        const positionElement = screen.getByText(
            /Position: \(0, 0\) | Direction: North/i
        );
        expect(positionElement).toBeInTheDocument(); // Robot should not move out of bounds
    });

    test('Does not move forward out of bounds when facing West', () => {
        render(<RobotControl />);

        const rotateCounterClockwiseButton = screen.getByLabelText(
            /Rotate counterclockwise/i
        );
        act(() => {
            fireEvent.click(rotateCounterClockwiseButton); // Rotate to West
        });

        const moveForwardButton = screen.getByLabelText(/Move forward/i);
        act(() => {
            fireEvent.click(moveForwardButton); // Tries to move out of bounds
        });

        const positionElement = screen.getByText(
            /Position: \(0, 0\) | Direction: West/i
        );
        expect(positionElement).toBeInTheDocument(); // Robot should not move out of bounds
    });
});