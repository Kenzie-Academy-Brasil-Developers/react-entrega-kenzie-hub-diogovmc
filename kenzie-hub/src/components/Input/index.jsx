import React from "react";
import { toast } from "react-toastify";

export const Input = ({ type, label, placeholder, register, error }) => {
  return (
    <fieldset>
      <label htmlFor={register.name}>{label}</label>
      <input
        id={register.name}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && <span>{error.message}</span>}
    </fieldset>
  );
};
