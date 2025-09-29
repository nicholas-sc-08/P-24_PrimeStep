export interface Iusuario {

    id: number;
    nome: string;
    email: string;
    telefone: string;
    senha: string;
};

export interface Icadastro_usuario {

    nome: string;
    email: string;
    telefone: string;
    senha: string;
};

export interface Iupdate_usuario {

    nome?: string;
    email?: string;
    telefone?: string;
    senha?: string;
};