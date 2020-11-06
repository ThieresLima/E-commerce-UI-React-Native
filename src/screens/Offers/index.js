import React from 'react';
import { Container, CardContainer } from './styles';

import Header from '../../components/Header';
import Card from '../../components/Card';

import Products from '../../services/Products';
const data = Products();

export default function Offers() {
  return (
    <Container>
      <Header text="E-Commerce App" />

      <CardContainer>
        {data.map((product, index) => {
          return (
            <Card key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              info={product.info}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
};