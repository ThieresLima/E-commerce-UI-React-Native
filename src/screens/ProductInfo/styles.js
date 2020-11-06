import styled from 'styled-components';

export const Container = styled.View``;

export const ContainerImage = styled.View`
  height: 460px;
`;

export const IconContainer = styled.View`
  width: 380px;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
`;

export const Icons = styled.View`
  flex-direction: row;
  width: 80px;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  width: 370px;
  background-color: #FFF;
  align-self: center;
  padding: 10px;
  margin-top: -80px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #444242;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #444242;
`;

export const Price = styled.Text`
  font-size: 22px;
  color: #1abf1a;
  font-weight: bold;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  background-color: pink;
`;

export const AddCart = styled.Text`
  text-align: center;
  width: 200px;
  height: 60px;
  font-weight: bold;
  align-self: center;
  font-size: 20px;
  padding: 3px;
  text-transform: uppercase;
  color: #FFF;
  background-color: #601b91;
`;

export const Purchase = styled.Text`
  text-align: center;
  width: 200px;
  height: 60px;
  font-weight: bold;
  font-size: 20px;
  padding-top: 16px;
  text-transform: uppercase;
  color: #FFF;
  background-color: #1abf1a;
`;