import { Icadastro_usuario, Iusuario } from "@/types/Iusuario.types";


export async function cadastro_cliente(data: Icadastro_usuario, senha_confirmada: string, array_usuarios: Iusuario[]) {

    try {

        if (data.senha != senha_confirmada) {

            alert("senhas não são iguais!");
            return;
        };

        array_usuarios.forEach((usuario) => {

            if (data.email.toUpperCase().includes(usuario.email.toUpperCase())) {

                alert("Email já cadastrado!");
                return;
            };
        });

        if (data.nome.trim() === "") {

            alert("Favor inserir um nome de usuário!");
            return;
        };

        if (data.email.trim() === "") {

            alert("Favor inserir um email!");
            return;
        };

        if (data.telefone.trim() === "") {

            alert("Favor inserir um telefone!");
            return;
        };

        if (data.senha.trim() === "") {

            alert("Favor inserir uma senha!");
            return;
        };

    } catch (erro: any) {

        
    };
};