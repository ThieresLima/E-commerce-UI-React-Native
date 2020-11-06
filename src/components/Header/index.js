import React from 'react';
import { Container, Head, Icons } from './styles';

import Icon  from 'react-native-vector-icons/MaterialIcons';
import Cart  from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();
Cart.loadFont();

function Header({ text }) {
  return (
    <Container>
      <Head>{text}</Head>
      <Icons>
        <Icon name="search" size={28} color="#FFF" />
        <Cart name="cart" size={28} color="#FFF" />
      </Icons>     
    </Container>
  );
}

export default Header;