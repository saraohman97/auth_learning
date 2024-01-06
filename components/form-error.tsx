import { WrenchIcon } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="w-full space-x-2 flex items-center rounded-md p-2 justify-center bg-destructive/20">
      <span>{message}</span>
      <WrenchIcon />
    </div>
  );
};
