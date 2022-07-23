import styled from 'styled-components';

const ButtonStyle = styled.button`
    background-color: #875ac4;
    color: #fff;
    padding: 1rem 2rem;
    border: 0;
    outline: 0;
    border-radius: .5rem;
    cursor: pointer;
`;

export function Button({ children, onClick, disabled }) {


    return (
        <ButtonStyle
            onClick={() => onClick && onClick()}
            disabled={disabled}
            data-testid="button">{children}</ButtonStyle>
    )
}
