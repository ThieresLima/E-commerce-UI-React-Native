import React from 'react';
import { Container, Icons } from './styles';

import Header from '../../components/Header';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import Cart  from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();
Cart.loadFont();

export default function Offers() {
  return (
    <Container>
      <Header text="E-Commerce App">
        <Icons>
          <Icon name="search" size={28} color="#FFF" />
          <Cart name="cart" size={28} color="#FFF" />
        </Icons>     
      </Header>
    </Container>
  );
};