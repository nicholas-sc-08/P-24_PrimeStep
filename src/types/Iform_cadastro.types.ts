export interface Iform_cadastro {

    id: number;
    nome: string;
    email: string;
    telefone: string;
    senha: string;
};

export interface Icadastro_form_cadastro {

    nome: string;
    email: string;
    telefone: string;
    senha: string;
};

export interface Iupdate_form_cadastro {

    nome?: string;
    email?: string;
    telefone?: string;
    senha?: string;
};