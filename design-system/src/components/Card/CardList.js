import { Card } from "../index";
import styled from "styled-components";

const CardListStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
`;

export function CardList({ cardList }) {
    return (
        <CardListStyle>
            {cardList?.map((card, index) => {
                return <Card key={`${card.id}-${index}`}>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Content>{card.content}</Card.Content>
                    <Card.Button>Click me</Card.Button>
                </Card>
            })}
        </CardListStyle>
    )
}
