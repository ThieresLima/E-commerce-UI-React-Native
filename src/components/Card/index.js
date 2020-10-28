import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { Container, Img, Title, Price } from './styles';

export default function Card({ image, title, price }) {
  return (
    <Container>
      <RectButton>
        <Img source={image} />
        <Title>{title}</Title>
        <Price>{price}</Price>
      </RectButton>
    </Container>
  );
}