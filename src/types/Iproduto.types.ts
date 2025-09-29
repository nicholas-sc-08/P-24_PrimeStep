export interface Iproduto {

    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imagem: string;
    categoria: string;
};

export interface Icadastro_produto {

    nome: string;
    preco: number;
    descricao: string;
    imagem: string;
    categoria: string;
};

export interface Iupdate_produto {

    nome?: string;
    preco?: number;
    descricao?: string;
    imagem?: string;
    categoria?: string;
};