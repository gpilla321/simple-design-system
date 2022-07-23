import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
    const CardStructure = ({ title, content, buttonText, buttonOnClick }) => (
        <Card>
            <Card.Title>{title ?? 'Title'}</Card.Title>
            <Card.Content>{content ?? 'Some Content'}</Card.Content>
            <Card.Button onClick={buttonOnClick}>{buttonText ?? 'Button'}</Card.Button>
        </Card>
    );

    it("should render card", () => {
        render(<Card>Some Text</Card>);
    });

    it("card have the correct strucutre", async () => {
        render(<CardStructure />);
    });

    it("card have the correct text", async () => {
        const expectedText = "Some text";
        render(<Card>{expectedText}</Card>);
        const card = await screen.findByTestId('card');
        expect(card.textContent.trim()).toBe(expectedText);
    });

    it("card title have the correct text", async () => {
        const expectedTitle = "New title";
        render(<CardStructure title={expectedTitle}/>);
        const cardTitle = await screen.findByTestId('card-title');
        
        expect(cardTitle.textContent.trim()).toBe(expectedTitle);
    });

    it("card content have the correct text", async () => {
        const expectedContent = "New Content";
        render(<CardStructure content={expectedContent}/>);
        const cardContent = await screen.findByTestId('card-content');
        expect(cardContent.textContent.trim()).toBe(expectedContent);
    });

    it("card button have the correct text", async () => {
        const expectedButtonText = "New button Text";
        render(<CardStructure buttonText={expectedButtonText}/>);
        const cardButton = await screen.findByTestId('button');
        expect(cardButton.textContent.trim()).toBe(expectedButtonText);
    });

    it("card button click must trigger event", async () => {
        const expectedButtonText = "New button Text";
        const mockFunction = jest.fn();
        render(<CardStructure buttonText={expectedButtonText} buttonOnClick={mockFunction}/>);
        const cardButton = await screen.findByTestId('button');

        fireEvent.click(cardButton);
        
        expect(mockFunction).toBeCalled();
    });
});

