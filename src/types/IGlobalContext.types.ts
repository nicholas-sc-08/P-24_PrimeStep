import React from "react";
import { Icadastro_usuario, Iusuario } from "./Iusuario.types";
import { Iproduto } from "./Iproduto.types";

export interface IGlobalContextType {

    array_usuarios: Iusuario[];
    set_array_usuarios: React.Dispatch<React.SetStateAction<any>>;
    array_produtos: Iproduto[];
    set_array_produtos: React.Dispatch<React.SetStateAction<any>>;
    form_cadastro: Icadastro_usuario;
    set_form_cadastro: React.Dispatch<React.SetStateAction<any>>;
    confirmar_senha: string;
    set_confirmar_senha: React.Dispatch<React.SetStateAction<any>>;
    mensagem_alert: string;
    set_mensagem_alert: React.Dispatch<React.SetStateAction<any>>;
};