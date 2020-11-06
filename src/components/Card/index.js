import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Container, Img, Title, Price } from './styles';

export default function Card({ image, title, price, info }) {
  const { navigate } = useNavigation();

  return (
    <Container>
      <RectButton onPress={() => navigate('ProductInfo', { image, info, price} )}>
        <Img source={image} />
        <Title>{title}</Title>
        <Price>{price}</Price>
      </RectButton>
    </Container>
  );
}