import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button Component', () => {
    it("should render button", () => {
        render(<Button>Some Text</Button>);
    });

    it("button have the correct text", () => {
        const expectedText = "Some text";
        render(<Button>{expectedText}</Button>);
        const button = screen.getByRole('button');
        expect(button.textContent).toBe(expectedText);
    });

    it("button should trigger onClick method", () => {
        const mockFunction = jest.fn();
        render(<Button onClick={mockFunction}>Click me</Button>);
        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(mockFunction).toBeCalled();
    });
});