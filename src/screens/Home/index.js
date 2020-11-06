import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Title } from './styles';

import { useNavigation } from '@react-navigation/native';

import Cart  from 'react-native-vector-icons/MaterialCommunityIcons';
Cart.loadFont();

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { navigate } = useNavigation();

  // simulando loading data
  useEffect(() => {
    setTimeout( () => loadingToFalse(), 3000);
  }, []);

  function loadingToFalse() {
    setLoading(false);
    navigate('NavigationTabs');
  };

  return (
    <Container>
      <Cart name="cart" size={100} color="#FFF" />
      <Title>E-Commerce</Title>
      {loading && 
        <ActivityIndicator size="large" 
        style={{ marginTop: 24 }} color="#FFF" 
      />}
      
    </Container>
  );
};