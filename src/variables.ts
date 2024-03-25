import { generarId } from './funciones';
import type { Cita } from './types';

let editando = {
  value: false,
};

// Objeto de Cita
const citaObj: Cita = {
  id: generarId(),
  paciente: '',
  propietario: '',
  email: '',
  fecha: '',
  sintomas: '',
};

export { editando, citaObj };

// Primitive Types
// let precio: number;
// let producto: string;
// let disponible: boolean;

// *Interface
// interface Producto {
//   precio: number;
//   producto: string;
//   disponible: boolean;
// }

// *Type
// type Producto = {
//   precio: number;
//   producto: string;
//   disponible: boolean;
// };

// const producto: Producto = {
//   precio: 50,
//   producto: 'monitor 24 pulgadas',
//   disponible: false,
// };

// console.log(producto);

// precio = 50;
// producto = 'Monitor 24 pulgadas';
// disponible = false;

// Evitar lo siguiente
// let precio : number | boolean
