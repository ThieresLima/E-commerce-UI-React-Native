import React from 'react';
import { Container, Head } from './styles';

function Header({ text, children }) {
  return (
    <Container>
      <Head>{text}</Head>
      {children}
    </Container>
  );
}

export default Header;