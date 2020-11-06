import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  ContainerImage,
  IconContainer, 
  Icons, 
  InfoContainer, 
  Title,
  Text,
  Price,
  Options,
  AddCart,
  Purchase
} from './styles';

import img from '../../assets/img/galaxya50.jpg';

import Icon  from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

export default function ProductInfo({ route }) {
  const { goBack } = useNavigation();
  return (
    <Container>
      <ContainerImage>
        <ImageBackground source={route.params.image} style={{ 
          flex: 1,
          height: 450,
          resizeMode: "contain", 
          }}>

          <IconContainer>
            <RectButton onPress={() => goBack()}>
              <Icon name="arrow-back"
                size={28} 
                color="#FFF" 
              />
            </RectButton>
            
            <Icons>
              <Icon name="share" size={28} color="#FFF" />
              <Icon name="shopping-cart" size={28} color="#FFF" />
            </Icons>
          </IconContainer>
        </ImageBackground>
      </ContainerImage>

      <InfoContainer>
        <Title>{route.params.info}</Title>
        <Price>{route.params.price}</Price>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum diam nec mauris auctor, 
            vel molestie lectus rhoncus. Integer venenatis dui sed posuere malesuada. Morbi sollicitudin erat eros, 
            non tempor arcu scelerisque nec. Nulla euismod, velit nec euismod mollis, ligula ex ullamcorper.
        </Text>
      </InfoContainer>

      <Options>
        <AddCart>Adicione ao{'\n'} carrinho</AddCart>
        <Purchase>Compre agora</Purchase>
      </Options>
    </Container>
  );
};
