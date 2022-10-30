import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    default: "Inválido",
    required: "Campo requerido",
    oneOf: "Debe ser uno de los siguientes valores: ${values}",
    notOneOf: "No debe ser ninguno de los siguientes valores: ${values}",
    notType: "Debe ser de tipo ${type}",
    defined: "Debe estar definido",
  },
  number: {
    min: "Debe ser mayor o igual que ${min}",
    max: "Debe ser menor o igual que ${max}",
    lessThan: "Debe ser menor que ${less}",
    moreThan: "Debe ser mayor que ${more}",
    notEqual: "No debe ser igual a ${notEqual}",
    positive: "Debe ser un número positivo",
    negative: "Debe ser un número negativo",
    integer: "Debe ser un entero",
  },
  string: {
    length: "Debe tener ${length} caracteres",
    min: "Debe tener al menos ${min} caracteres",
    max: "Debe tener máximo ${max} caracteres",
    matches: 'Debe coincidir con lo siguiente: "${regex}"',
    email: "Debe ser un correo válido",
    url: "Deber ser una URL válida",
    uuid: "Debe ser un UUID válido",
    lowercase: "Debe ser en minúscula",
    uppercase: "Debe ser en mayúscula",
  },
  date: {
    min: "Debe ser después de ${min}",
    max: "Debe ser antes de ${max}",
  },
  object: {
    noUnknown: "Tiene atributos no especificados: ${unknown}",
  },
  array: {
    min: "Debe tener al menos ${min} items",
    max: "Debe tener menos de ${max} items",
  },
});

export default Yup;
