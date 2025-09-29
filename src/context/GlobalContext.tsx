"use client";

import { Icadastro_usuario, Iusuario } from "@/types/Iusuario.types";
import { IGlobalContextType } from "@/types/IGlobalContext.types";
import { ReactNode, createContext, useContext, useState } from "react";

const GlobalContext = createContext<IGlobalContextType | null>(null);

export const GlobalProvider = ({ children } : { children: ReactNode}) => {

    const [array_usuarios, set_array_usuarios] = useState<Iusuario[]>([]);
    const [form_cadastro, set_form_cadastro] = useState<Icadastro_usuario>({nome: "", email: "",telefone: "", senha: ""});
    const [confirmar_senha, set_confirmar_senha] = useState<string>("");

    return(

        <GlobalContext.Provider value={{
            
            array_usuarios,
            set_array_usuarios,
            form_cadastro, 
            set_form_cadastro, 
            confirmar_senha, 
            set_confirmar_senha,

        }}>{children}</GlobalContext.Provider>
)};

export const useGlobalContext = () => {

    const context = useContext(GlobalContext);

    if(!context){

        throw new Error("global context deve ser usado dentro de um provider");
    };
    return context;
};