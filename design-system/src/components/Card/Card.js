import styled from 'styled-components';
import { Button } from '../Button/button';

const CardStyle = styled.div`
        background-color: #f2f2f2;
        padding: 2em;
    `;


export function Card({ children }) {

    return (
        <CardStyle data-testid="card"> {children} </CardStyle>
    )
}

Card.Title = ({ children, ...restProps }) => {
    return (
        <h3 data-testid="card-title">{children}</h3>
    )
}

Card.Content = ({ children, ...restProps }) => {
    return (
        <p data-testid="card-content">{children}</p>
    )
}

Card.Button = ({ children, onClick, disabled, ...restProps }) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}