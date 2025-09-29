"use client";

import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { useGlobalContext } from "@/context/GlobalContext";
import { tipos_alert } from "@/utils/enum.utils";

export default function AlertMessage() {

    const { mensagem_alert, set_mensagem_alert } = useGlobalContext();

    const icons = {

        [tipos_alert.SUCESS]: <CheckCircle2 className="h-4 w-4 text-green-600"/>,
        [tipos_alert.ERROR]: <AlertCircle className="h-4 w-4 text-red-600" />,
        [tipos_alert.INFO]: <Info className="h-4 w-4 text-blue-600" />,
        [tipos_alert.WARNING]: <AlertTriangle className="h-4 w-4 text-yellow-600" />,
    };

    const estilos = {

        [tipos_alert.SUCESS]: "border-green-500/50 bg-green-50 text-green-800",
        [tipos_alert.ERROR]: "border-red-500/50 bg-red-50 text-red-800",
        [tipos_alert.INFO]: "border-blue-500/50 bg-blue-50 text-blue-800",
        [tipos_alert.WARNING]: "border-yellow-500/50 bg-yellow-50 text-yellow-800",
    };

    return (
        <Alert>
            {mensagem_alert}
        </Alert>

    )
};