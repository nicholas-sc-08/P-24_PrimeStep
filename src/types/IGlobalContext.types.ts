import React from "react";
import { Icadastro_form_cadastro } from "./Iform_cadastro.types";

export interface IGlobalContextType {

    form_cadastro: Icadastro_form_cadastro | null,
    set_form_cadastro: React.Dispatch<React.SetStateAction<any>>;
};