import { Check } from "lucide-react";

interface FormErrorProps {
    message?: string;
}

export const FormSuccess = ({message}: FormErrorProps) => {
    if(!message) return null;

    return (
        <div className="w-full space-x-2 flex items-center rounded-md p-2 justify-center bg-emerald-200">
        <span>{message}</span>
        <Check />
        </div>
    )
}