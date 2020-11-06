import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import Cart  from 'react-native-vector-icons/MaterialCommunityIcons';

import Department from '../../components/Department'; 
import LoadDepartment from '../../services/Departments';
const data = LoadDepartment();

Icon.loadFont();
Cart.loadFont();

export default function DepartmentList() {
  return (
    <Container>
      <Header text="Departamento" />

      {data.map((department, index) => {
        return (
          <Department key={index}
            image={department.image}
            title={department.title}
            info={department.info}
          />
        );
      })}
    </Container>
  );
};