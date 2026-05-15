import type { InputHTMLAttributes } from "react";

// Estendemos as propriedades nativas do HTML Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full h-10 pl-3 bg-[#0d1117] border border-[#3D444D] rounded-md outline-none 
                 focus:ring-1 focus:ring-inset focus:ring-[#2f81f7] focus:border-[#2f81f7] 
                 ${className || ""}`}
    />
  );
}
