import * as yup from "yup";

export const formLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Insira o seu email")
    .email("O email digitado é inválido."),

  password: yup.string().required("insira sua senha").min(6, "Senha Invalida"),
});
