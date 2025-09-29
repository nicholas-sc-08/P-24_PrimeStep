import { Iusuario } from "@/types/Iusuario.types";
import axios from "axios";

export async function get_usuarios(): Promise<Iusuario[]>{

    try {

        const resposta = await axios.get("http://localhost:8080/usuarios");
        return resposta.data;
        
    } catch (erro: any) {
      
        console.error(erro.message);
        throw new Error("Erro ao buscar o array de Usuários!");
    };
};