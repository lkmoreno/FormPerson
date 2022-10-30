import Yup from "../../config/yup";

export const formSchema = Yup.object().shape({
  documentType: Yup.string().required("Por favor ingrese el tipo de documento"),
  document: Yup.string()
    .min(8, "Ingresar un número de mínimo de 8 dígitos")
    .max(11, "Ingresar un número de máximo de 11 dígitos")
    .required("Por favor ingrese el número de documento")
    .matches(/^([0-9])*$/, "Ingresar solo números"),
});
