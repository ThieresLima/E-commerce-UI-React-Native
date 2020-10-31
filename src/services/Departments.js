import eletronics from '../assets/img/eletronics.jpeg';
import sport from '../assets/img/esportes.jpg';
import Moda from '../assets/img/Moda.jpg';
import work from '../assets/img/work.jpg';
import home from '../assets/img/home.jpg';
import baby from '../assets/img/baby.jpg';

export default function Departments() {
  return [
    {
      id: 1,
      image: eletronics,
      title: "Eletrônicos",
      info: "100 items"
    },
    {
      id: 2,
      image: sport,
      title: "Esportes",
      info: "R$70 items"
    },
    {
      id: 3,
      image: Moda,
      title: "Moda",
      info: "230 items"
    },
    {
      id: 5,
      image: work,
      title: "Trabalho",
      info: "40 items"
    },
    {
      id: 6,
      image: home,
      title: "Casa",
      info: "90 items"
    },
    {
      id: 7,
      image: baby,
      title: "Infantil",
      info: "30 items"
    },
  ];
};
