"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { cadastro_cliente } from "@/services/cadastro";
import { useGlobalContext } from "@/context/GlobalContext";

export default function cadastro() {

    const router = useRouter();
    const { confirmar_senha, set_confirmar_senha } = useGlobalContext();
    const { form_cadastro, set_form_cadastro } = useGlobalContext();
    const { array_usuarios } = useGlobalContext();

    return (

        <div className="flex items-center justify-center min-h-screen bg-neutral-100">
            <Card className="w-full max-w-sm bg-neutral-50">
                <CardHeader>
                    <CardTitle>Crie sua conta</CardTitle>
                    <CardDescription>Crie uma conta em nossa plataforma para acessar nossos produtos exclusivos!</CardDescription>
                    <CardAction>
                        <Button onClick={() => router.push(`/login`)} className="cursor-pointer" variant={"link"}>Faça Login</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="nome">Nome</Label>
                            <Input value={form_cadastro.nome} onChange={e => set_form_cadastro({ ...form_cadastro, nome: e.target.value })} id="nome" placeholder="Seu nome de usuário" required />
                            <Label htmlFor="email">Email</Label>
                            <Input value={form_cadastro.email} onChange={e => set_form_cadastro({ ...form_cadastro, email: e.target.value })} id="email" placeholder="email@exemplo.com" required />
                            <Label htmlFor="telefone">Telefone</Label>
                            <Input value={form_cadastro.telefone} onChange={e => set_form_cadastro({ ...form_cadastro, telefone: e.target.value })} id="telefone" placeholder="+55 (99) 91111-1111" type="tel" required />
                            <Label htmlFor="senha">Senha</Label>
                            <Input value={form_cadastro.senha} onChange={e => set_form_cadastro({ ...form_cadastro, senha: e.target.value })} id="senha" placeholder="Sua senha de usuário" type="password" required />
                            <Label htmlFor="confirmar_senha">Confirmar Senha</Label>
                            <Input value={confirmar_senha} onChange={e => set_confirmar_senha(e.target.value)} id="confirmar_senha" placeholder="Confirme sua senha de usuário" type="password" required />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                    <Button type="button" onClick={() => cadastro_cliente(form_cadastro, confirmar_senha, array_usuarios)} className="cursor-pointer w-full bg-neutral-600 hover:bg-neutral-700">Cadastrar</Button>
                </CardFooter>
            </Card>
        </div>
    )
};