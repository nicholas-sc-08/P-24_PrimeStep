"use client";


import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function cadastro() {

    const router = useRouter();

    return(

        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-sm">
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
                            <Input id="nome" placeholder="Seu nome de usuário" required/>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="email@exemplo.com" required/>
                            <Label htmlFor="telefone">Telefone</Label>
                            <Input id="telefone" placeholder="+55 (99) 91111-1111" type="tel"/>
                            <Label htmlFor="senha">Senha</Label>
                            <Input id="senha" placeholder="Sua senha de usuário" type="password"/>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                    <Button className="cursor-pointer w-full">Enviar</Button>
                </CardFooter>
            </Card>
        </div>
    )};