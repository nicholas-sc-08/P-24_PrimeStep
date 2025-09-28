"use client";

import { Icadastro_form_cadastro, Iform_cadastro } from "@/types/Iform_cadastro.types";
import { IGlobalContextType } from "@/types/IGlobalContext.types";
import { ReactNode, createContext, useContext, useState } from "react";

const GlobalContext = createContext<IGlobalContextType | null>(null);

export const GlobalProvider = ({ children } : { children: ReactNode}) => {

    const [form_cadastro, set_form_cadastro] = useState<Icadastro_form_cadastro>({nome: "", email: "",telefone: "", senha: ""});

    return(

        <GlobalContext.Provider value={{form_cadastro, set_form_cadastro}}>{children}</GlobalContext.Provider>
)};

export const useGlobalContext = () => {

    const context = useContext(GlobalContext);
    return context;
};