import React from 'react';

import {
  Departments, 
  Image, 
  ContainerInfo,
  Title, Info 
} from './styles';

export default function Departmen({ image, title, info}) {
  return (
    <Departments>
      <Image source={image} />
        <ContainerInfo>
          <Title>{title}</Title>
          <Info>{info}</Info>
        </ContainerInfo> 
    </Departments>
  );
};