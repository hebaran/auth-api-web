import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonSubmit({ className, children, ...props }: ButtonProps) {
  return (
    <button 
      {...props} 
      className={`w-full h-10 cursor-pointer bg-[#238636] border border-[#49A158] rounded-md font-semibold ${className}`}
    >
      {children}
    </button>
  );
}
