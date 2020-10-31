import React from 'react';
import { Container, Icons, CardContainer } from './styles';

import Header from '../../components/Header';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import Cart  from 'react-native-vector-icons/MaterialCommunityIcons';

import Card from '../../components/Card';

import Products from '../../services/Products';
const data = Products();

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

      <CardContainer>
        {data.map((product, index) => {
          return (
            <Card key={index}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
};