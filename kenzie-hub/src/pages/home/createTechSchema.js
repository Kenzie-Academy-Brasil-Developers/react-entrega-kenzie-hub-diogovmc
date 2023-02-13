import * as yup from "yup";

export const createTechSchema = yup.object().shape({
  title: yup.string().required("O nome é obrigátorio"),
});
