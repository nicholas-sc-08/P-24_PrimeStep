"use client";

import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { fazer_login } from "@/services/login";

export default function login() {

    const router = useRouter();

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Faça Login na sua conta</CardTitle>
                    <CardDescription>Insira seu email abaixo para fazer login na sua conta</CardDescription>
                    <CardAction>
                        <Button onClick={() => router.push(`/cadastro`)} className="cursor-pointer" variant={"link"}>Cadastre-se</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="email@exemplo.com" required />
                                <Label htmlFor="senha">Senha</Label>
                                <Input id="senha" type="password" placeholder="********" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="button" onClick={fazer_login} className="cursor-pointer w-full">Enviar</Button>
                    <Button variant="outline" className="cursor-pointer w-full">Login with Google</Button>
                </CardFooter>
            </Card>
        </div>
    )
};